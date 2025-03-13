import { useEffect } from "react";
import useAlbums from "../stores/albums";

export default function Init() {
  const albums = useAlbums.use.albums();
  const state = useAlbums.use.state();
  const clear = useAlbums.use.clear();
  const setState = useAlbums.use.setState();

  useEffect(() => {
    if (state === "success" && albums.length > 0) {
      setState("load");
      clear();
    }
  }, [state, albums]);
  return <></>;
}
