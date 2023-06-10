import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { RootState, Dispatch, selectStatus } from "../store/store";

export const useAppDispatch: () => Dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useStatus = () => {
  const status = useSelector(selectStatus);
  return [status];
};
