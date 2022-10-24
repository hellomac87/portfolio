interface SanityBody {
  _createAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  address: string;
  backgroundInformation: string;
  email: string;
  role: string;
  heroImage: Image;
  name: string;
  phoneNumber: string;
  profilePic: Image;
}

export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}
