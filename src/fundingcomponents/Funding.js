import { Content } from "./Content";
import { FundingContext } from "./FundingContext";
import { Header } from "./Header";
import "./styleWalletbtn.css";
import "./styleMunityjoin.css";
import "./styleTabcontrol.css";
import "./styleEthereumModal.css";
import "./styleNfts.css";
import "./styleSlideModal.css";
import "./styleSlide.css";
import "./styleAvailablestaked.css";
import "./styleStakeSettingModal.css";
import "./styleHamburger.css";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import {
  getNftOwnedTokenIds,
  getNftTotalStaked,
  tokenURI,
} from "../utils/Contract";

export const Funding = () => {
  const { address } = useAccount();
  const [availableNfts, setAvailableNfts] = useState([]);
  const [stakedNfts, setStakedNfts] = useState([]);
  const [availableNftIds, setAvailableNftIds] = useState([]);
  const [stakedNftIds, setStakedNftIds] = useState([]);
  const [isStaked, setIsStaked] = useState([]);
  const [tokenId, setTokenId] = useState(0);
  const [currentStaked, setCurrentStaked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const resetTokenID = (tokenId) => {
    setTokenId(tokenId);
  };

  const resetCurrentStaked = (tokenId) => {
    setCurrentStaked(tokenId);
  };

  useEffect(() => {
    const fetchNftData = async () => {
      if (!address) return;

      setLoading(true);
      setError(null);

      try {
        // Fetch Token IDs and Staked IDs safely
        const [tokenIds, stakedIds] = await Promise.allSettled([
          getNftOwnedTokenIds(address),
          getNftTotalStaked(address),
        ]).then((results) =>
          results.map((result) =>
            result.status === "fulfilled" ? result.value : []
          )
        );

        // Set default token and staking state
        if (tokenIds.length === 0 && stakedIds.length > 0) {
          setTokenId(stakedIds[0]);
          setCurrentStaked(true);
        } else if (tokenIds.length > 0) {
          setTokenId(tokenIds[0]);
          setCurrentStaked(false);
        }

        // Update available and staked IDs
        setAvailableNftIds(tokenIds);
        setStakedNftIds(stakedIds);

        // Fetch token URIs in parallel
        const [availableImages, stakedImages] = await Promise.allSettled([
          Promise.all(tokenIds.map((id) => tokenURI(id, address))),
          Promise.all(stakedIds.map((id) => tokenURI(id, address))),
        ]).then((results) =>
          results.map((result) =>
            result.status === "fulfilled" ? result.value : []
          )
        );

        setAvailableNfts(availableImages);
        setStakedNfts(stakedImages);

        // Update staking status
        const isStakedArray = [
          ...new Array(tokenIds.length).fill(false),
          ...new Array(stakedIds.length).fill(true),
        ];
        setIsStaked(isStakedArray);
      } catch (err) {
        console.error("Error fetching NFT data:", err);
        setError("Failed to load NFT data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchNftData();
  }, [address]);

  return (
    <div>
      <FundingContext.Provider
        value={{
          activeBtn: "left",
          connect: "false",
          isStaked: isStaked,
          availableNftIds: availableNftIds,
          availableNfts: availableNfts,
          stakedNftIds: stakedNftIds,
          stakedNfts: stakedNfts,
          tokenId: tokenId,
          resetTokenID: resetTokenID,
          currentStaked: currentStaked,
          resetCurrentStaked: resetCurrentStaked,
        }}
      >
        <Header />
        {loading && <p>Loading NFT data...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        <Content />
      </FundingContext.Provider>
    </div>
  );
};
