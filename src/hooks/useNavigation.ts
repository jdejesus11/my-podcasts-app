import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { RootState, Dispatch } from "../store/store";
import { useNavigate } from "react-router-dom";

export const useAppDispatch: () => Dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const useRouting = () => {
  const navigate = useNavigate();

  const navigateTo = (destination?: string) => {
    navigate(destination ?? "/");
  };

  return [
    {
      navigateTo,
    },
  ];
};

export default useRouting;
