import { v4 as uuidv4 } from "uuid";

const getMusics = () => {
  return [
    {
      name: "Keep You",
      artist: "Spektrum, Sara Skinner",
      cover:
        "https://linkstorage.linkfire.com/medialinks/images/f46aee52-b562-442b-bf05-42c239d6b7f1/artwork-440x440.jpg",
      id: uuidv4(),
      active: true,
      color: ["#FEAF77", "#8A0063"],
      audio:
        "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/589/keep-you-1586957598-zpvct6T3UD.mp3"
    },
    {
      name: "Mr. Bully",
      artist: "CHENDA",
      cover:
        "https://linkstorage.linkfire.com/medialinks/images/f51e39e0-a8fc-45a7-9194-0c9b6bca520d/artwork-440x440.jpg",
      id: uuidv4(),
      active: false,
      color: ["#32FEFB", "#021564"],
      audio:
        "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/965/mr-bully-1624525239-TwxU4630qj.mp3"
    },
    {
      name: "Power !",
      artist: "Godmode, LBLVNC",
      cover:
        "https://linkstorage.linkfire.com/medialinks/images/0f999a17-a97a-4343-91ad-79b8ab40bbc2/artwork-440x440.jpg",
      id: uuidv4(),
      active: false,
      color: ["#D45433", "#3F4895"],
      audio:
        "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/963/power-1623945636-cmtHdqhL1v.mp3"
    },
    {
      name: "Ten More Minutes",
      artist: "Shiah Maisel, CHENDA",
      cover:
        "https://linkstorage.linkfire.com/medialinks/images/46587ada-0653-460e-ad29-220269aaa366/artwork-440x440.jpg",
      id: uuidv4(),
      active: false,
      color: ["#A833A6", "#180C2B"],
      audio:
        "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/953/ten-more-minutes-1622116835-BjiBRTQJWr.mp3"
    },
    {
      name: "Father",
      artist: "Diamond Eyes",
      cover:
        "https://linkstorage.linkfire.com/medialinks/images/eb747457-ed8b-4959-b369-90faa70a6028/artwork-440x440.jpg",
      id: uuidv4(),
      active: false,
      color: ["#CD8974", "#210E0A"],
      audio:
        "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/930/father-1617890434-x0Rv7yrVUM.mp3"
    },
    {
      name: "The Revolution",
      artist: "Arc North, Neoni, Egzod",
      cover:
        "https://linkstorage.linkfire.com/medialinks/images/2532f156-041a-496d-9efc-88ecf7917043/artwork-440x440.jpg",
      id: uuidv4(),
      active: false,
      color: ["#B8C8BC", "#3D1C17"],
      audio:
        "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/903/the-revolution-1612454454-WLdzt3tdFe.mp3"
    },
    {
      name: "Finally Healing",
      artist: "Abandoned, Shiah Maisel, InfiNoise",
      cover:
        "https://linkstorage.linkfire.com/medialinks/images/b05074f7-6279-40d3-ab33-2c0183b220ac/artwork-440x440.jpg",
      id: uuidv4(),
      active: false,
      color: ["#E9A1FD", "#160028"],
      audio:
        "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/893/finally-healing-1610715634-F0MiE2EFUL.mp3"
    },
    {
      name: "Summoning",
      artist: "More Plastic",
      cover:
        "https://linkstorage.linkfire.com/medialinks/images/424b0557-f32a-4fbf-9e0a-2eab9131b953/artwork-440x440.jpg",
      id: uuidv4(),
      active: false,
      color: ["#F88A27", "#2B1517"],
      audio:
        "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/710/summoning-1586960990-v4hEqzZMvJ.mp3"
    },
    {
      name: "Desire",
      artist: "Blooom, Ghost'n'Ghost",
      cover:
        "https://linkstorage.linkfire.com/medialinks/images/1250d7ac-46d9-41b4-95fe-38acd5ed11ee/artwork-440x440.jpg",
      id: uuidv4(),
      active: false,
      color: ["#E8B981", "#631D4F"],
      audio:
        "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/634/desire-1586958536-ml5Igco6eZ.mp3"
    },
    {
      name: "Redemption (ft. Riell)",
      artist: "Besomorph, Coopex, Riell",
      cover:
        "https://linkstorage.linkfire.com/medialinks/images/39cdd19f-be7d-47f6-b826-36dc5920be00/artwork-440x440.jpg",
      id: uuidv4(),
      active: false,
      color: ["#AF5E62", "#0F1B32"],
      audio:
        "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/633/redemption-ft-riell-1586958515-ANrfEQ0iv3.mp3"
    },
    {
      name: "Runaway (feat. Valentina Franco)",
      artist: "Halcyon, Valentina Franco",
      cover:
        "https://linkstorage.linkfire.com/medialinks/images/4863f137-4454-47c8-9926-16ac06dfc3a1/artwork-440x440.jpg",
      id: uuidv4(),
      active: false,
      color: ["#91A36F", "#1F444B"],
      audio:
        "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/424/runaway-feat-valentina-franco-tari-remix-1586952950-2NFtl0HHM9.mp3"
    }
  ];
};

export default getMusics;
