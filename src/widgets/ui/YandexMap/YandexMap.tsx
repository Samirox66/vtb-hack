import {
  YMaps,
  Map,
  Placemark,
  GeolocationControl,
} from "@pbe/react-yandex-maps";
import { getBranchRequest, useBankBranchesStore } from "../..";
import { useEffect, useState } from "react";

const YandexMap = () => {
  const bankBranchesStore = useBankBranchesStore();
  const [userPosition, setUserPosition] = useState<Array<number> | null>(null);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setUserPosition([latitude, longitude]);
    });
  }, []);
  const center = userPosition ? userPosition : [56, 56];
  return (
    <YMaps
      query={{ lang: "en_RU", apikey: import.meta.env.VITE_YANDEX_API_KEY }}
    >
      <Map
        width={"100vw"}
        height={"150vh"}
        defaultState={{
          center: center,
          zoom: 15,
        }}
      >
        <GeolocationControl />
        {bankBranchesStore.branches.map((branch, index) => (
          <Placemark
            key={`${branch.name}${index}`}
            geometry={[branch.lat, branch.lng]}
            properties={{
              hintContent: "Click me",
              balloonContent: "this is label",
            }}
            instanceRef={(inst) =>
              inst?.events.add("click", async () => {
                const data = await getBranchRequest(branch.id);
                if (data == null) {
                  return;
                }

                bankBranchesStore.setCompleteBranch({
                  id: 1,
                  address: "vfdvdfv",
                  name: "vsvsdc",
                  lat: 4,
                  lng: 6,
                });
              })
            }
            modules={["geoObject.addon.balloon"]}
          />
        ))}
      </Map>
    </YMaps>
  );
};

export default YandexMap;
