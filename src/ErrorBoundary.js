import React from "react";
import { Alert } from "react-bootstrap";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught in ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
        Alert.error('An error occurred: {this.state.error?.message || "Unknown error"}');
    //   return <h1>An error occurred: {this.state.error?.message || "Unknown error"}</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
