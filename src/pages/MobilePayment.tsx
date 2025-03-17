import useAlbums from "../stores/albums";
import MobileMoney from "../components/mobile-money/MobileMoney";
import { Navigate } from "react-router";
import { albums } from "../datas/albums";

export default function MobilePayment() {
  const albumData = useAlbums.use.albums();
  const all = useAlbums.use.all();
  if (albumData.length === 0 && !all)
    return <Navigate to="/404" replace={true} />;
  const data = all ? albums : albumData;
  return <MobileMoney albums={data} />;
}
