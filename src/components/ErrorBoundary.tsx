import React, { ErrorInfo, ReactNode } from "react";

interface ErrorBoundaryState {
  hasError: boolean;
}

interface ErrorBoundaryProps {
  children: ReactNode;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.log("Error captured:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100 px-4">
          <div className="bg-gray-800 rounded-xl shadow-lg p-8 max-w-lg w-full text-center border-2 border-primary">
            <svg
              className="mx-auto mb-4 w-16 h-16 text-primary"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v2m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9zm-9 4h.01"
              />
            </svg>
            <h1 className="text-2xl font-bold mb-2 text-primary">
              Something went wrong
            </h1>
            <p className="mb-4 text-gray-300">
              Sorry, an unexpected error has occurred.
              <br />
              Please try refreshing the page or contact me (
              <a
                href="mailto:charliejt1992@hotmail.com"
                className="text-primary underline"
              >
                charliejt1992@hotmail.com
              </a>
              ) if the problem persists.
            </p>
            <button
              className="mt-2 px-6 py-2 bg-primary text-white rounded-full font-semibold shadow hover:bg-blue-600 transition"
              onClick={() => window.location.reload()}
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
