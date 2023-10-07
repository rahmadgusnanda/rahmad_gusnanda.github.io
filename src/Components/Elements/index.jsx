import PendaftaranOnline from "./PendaftaranOnline";
import UangKuliah from "./UangKuliah";
import UangRegistrasi from "./UangRegistrasi";
import WaktuKuliah from "./WaktuKuliah";
import PbiUmt from "./PbiUmt";

const WebPendaftaran = () => {
  return (
    <div>
      <PbiUmt />
      <WaktuKuliah />
      <UangRegistrasi />
      <UangKuliah />
      <PendaftaranOnline />
    </div>
  );
};

export default WebPendaftaran;
