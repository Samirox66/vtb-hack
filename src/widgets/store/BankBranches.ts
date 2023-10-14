import { create } from "zustand";

type BankBranchStore = {
  branches: Array<BankBranch>;
  isLoading: Boolean;
  clickedBranch: CompleteBankBranch | null;
  setBranches: (branches: BankBranch[]) => void;
  setCompleteBranch: (branch: CompleteBankBranch) => void;
};

type BankBranch = {
  id: number;
  lat: number;
  lng: number;
  address: string;
  name: string;
};

export type CompleteBankBranch = {
  id: number;
  lat: number;
  lng: number;
  address: string;
  name: string;
};

const useBankBranchesStore = create<BankBranchStore>((set) => ({
  branches: [
    {
      id: 1,
      lat: 60,
      lng: 30.3,
      address: "",
      name: "",
    },
  ],
  clickedBranch: null,
  isLoading: false,
  setBranches: (branches) =>
    set((state) => ({
      ...state,
      branches,
      isLoading: false,
    })),
  setCompleteBranch: (branch) => {
    set((state) => ({
      ...state,
      clickedBranch: branch,
    }));
  },
}));

export default useBankBranchesStore;
