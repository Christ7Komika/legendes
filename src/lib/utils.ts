import { AlbumCartType } from "../types/album";

export function getPrice(price: string): number {
    const p = price.split(" ")[0];
    return Number((p.split(".")[0]).replace(",", ""));
}


export function getQuantities(datas: AlbumCartType[]): number {
    return datas.reduce((prev, curr) => prev + curr.quantity, 0)
}

export function getPrices(datas: AlbumCartType[]): number {
    return datas.reduce((prev, curr) => prev + (curr.quantity * getPrice(curr.price)), 0)
}

export function formatPrice(price: number): string {
    if (price === null || price === undefined || isNaN(price)) {
        return "0";
    }

    if (price >= 1_000_000_000) {
        const billions = price / 1_000_000_000;
        return `${billions.toFixed(1).replace(/\.0$/, '')} B`;
    }

    if (price >= 1_000_000) {
        const millions = price / 1_000_000;
        return `${millions.toFixed(1).replace(/\.0$/, '')} M`;
    }

    if (price >= 1_000) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    return price.toString();
}