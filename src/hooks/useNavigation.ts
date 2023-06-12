import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { RootState, Dispatch } from "../store/store";
import { useNavigate, useParams } from "react-router-dom";

export const useAppDispatch: () => Dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const useRouting = () => {
  const navigate = useNavigate();
  const { podcastId, episodeId } = useParams();

  const navigateTo = (destination?: string) => {
    navigate(destination ?? "/");
  };

  const goBack = () => {
    if (episodeId && podcastId) {
      navigateTo(`/podcasts/${podcastId}`);
      return;
    }
    if (!episodeId && podcastId) {
      navigateTo(`/`);
      return;
    }

    navigate(-1);
  };

  return [
    {
      navigateTo,
      goBack,
    },
  ];
};

export default useRouting;
