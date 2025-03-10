import { useEffect, useState } from "react";
import useAlbums from "../stores/albums";

export default function useCheckoutLink() {
    const albums = useAlbums.use.albums();
    const [checkout, setCheckout] = useState("");

    useEffect(() => {
        if (albums.length === 1) {
            const album = albums[0];
            if (album.title.toUpperCase() === "NANI A KOSSI YO") {
                setCheckout("https://buy.stripe.com/test_aEUcQtbF51q2dws4gh")
            } else {
                setCheckout("https://buy.stripe.com/test_5kA4jX24v5GigIEaEG")
            }
        }
        if (albums.length === 2) {
            setCheckout("https://buy.stripe.com/test_4gw9EhcJ96KmgIE9AA");
        }
    }, [albums]);

    return checkout;
}