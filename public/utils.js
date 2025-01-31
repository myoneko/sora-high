export const elementColors = {
    Dendro: "#0aff00",
    Pyro: "#ff0000",
    Hydro: "#0060ff",
    Cryo: "#00d6ff",
    Anemo: "#00fff9",
    Electro: "#ba00ff",
    Geo: "#ff8700",
};

export async function fetchData(endPoint, callback) {
    return await fetch(endPoint)
        .then((res) => {
            if (!res.ok) throw new Error(`[-] Error fetching data from the server: Error ${res.status}`);
            return res.json();
        })
        .then((data) => {
            // console.log(data);
            if (callback) callback(data);
            return data;
        })
        .catch((error) => {
            throw error;
        });
}
