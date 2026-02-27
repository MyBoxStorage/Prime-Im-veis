import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Prime Imóveis — erro não tratado:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-white p-8 text-center">
          <h1 className="text-3xl font-bold mb-4">Algo deu errado</h1>
          <p className="text-gray-400 mb-8 max-w-md">
            Ocorreu um erro inesperado. Por favor, recarregue a página ou entre em contato conosco.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
          >
            Recarregar página
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
