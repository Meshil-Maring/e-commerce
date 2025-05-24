import SurfCuz from "../../../assets/images/surf-cuz.png";
import ShareIcon from "../../../assets/icons/share";
import HeartIcon from "../../../assets/icons/HeartIcon";
import CommentIcon from "../../../assets/icons/comments";

const ImagePreview = () => {
  return (
    <div className="bg-[#C8C8C8] m-4 rounded-2xl relative">
      <img className="bg-cover" src={SurfCuz} alt="surf cuz"></img>

      <aside className="flex gap-3 flex-col absolute top-6 right-4">
        <HeartIcon size={24} strokeW="1.5" stroke="var(--secondary)" />
        <ShareIcon size={24} strokeW="1.5" stroke="var(--secondary)" />
        <CommentIcon size={24} strokeW="1.5" stroke="var(--secondary)" />
      </aside>
    </div>
  );
};

export default ImagePreview;
