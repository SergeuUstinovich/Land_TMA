declare global {
  interface Window {
    ym: (id: number, goal: string, params: string) => void;
  }
}

export {};
