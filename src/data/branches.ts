export interface BranchInfo {
  id: string;
  name: string;
  shortName: string;
  fullName: string;
  address: string;
  addressLine1: string;
  addressLine2: string;
  addressLine3: string;
  landmark: string;
  city: string;
  pincode: string;
  phone: string;
  displayPhone: string;
  email: string;
  mapHref: string;
  mapEmbedUrl: string;
  pagePath: string;
}

export const BRANCHES: Record<string, BranchInfo> = {
  ghatkopar: {
    id: "ghatkopar",
    name: "Ghatkopar",
    shortName: "Ghatkopar",
    fullName: "Ghatkopar East Branch",
    address: "107 & 108, Sai Infotech, Patel Chowk, Opposite Railway Station, Pant Nagar, Ghatkopar East, Mumbai 400077",
    addressLine1: "107 & 108, Sai Infotech, Patel Chowk,",
    addressLine2: "Opposite Railway Station, Pant Nagar,",
    addressLine3: "Ghatkopar East, Mumbai 400077",
    landmark: "Opposite Railway Station, Patel Chowk",
    city: "Mumbai",
    pincode: "400077",
    phone: "+919987588932",
    displayPhone: "+91 99875 88932",
    email: "care@amigoacademy.in",
    mapHref: "https://maps.google.com/?q=Sai+Infotech+Ghatkopar+East+Mumbai",
    mapEmbedUrl: "https://maps.google.com/maps?q=Amigo%20Academy%20Ghatkopar%20Sai%20Infotech%20Mumbai&t=&z=16&ie=UTF8&iwloc=&output=embed",
    pagePath: "/ghatkopar-branch"
  },
  andheri: {
    id: "andheri",
    name: "Andheri",
    shortName: "Andheri",
    fullName: "Andheri West Branch",
    address: "902, 9th Floor, Time Chambers, Swami Vivekanand Road, Andheri West, Mumbai 400058",
    addressLine1: "902, 9th Floor, Time Chambers,",
    addressLine2: "Swami Vivekanand Road,",
    addressLine3: "Andheri West, Mumbai 400058",
    landmark: "Swami Vivekanand Road",
    city: "Mumbai",
    pincode: "400058",
    phone: "+919987588932",
    displayPhone: "+91 99875 88932",
    email: "care@amigoacademy.in",
    mapHref: "https://maps.google.com/?q=Time+Chambers+Andheri+West+Mumbai",
    mapEmbedUrl: "https://maps.google.com/maps?q=Amigo%20Academy%20Andheri%20Time%20Chambers%20Mumbai&t=&z=16&ie=UTF8&iwloc=&output=embed",
    pagePath: "/andheri-branch"
  },
  thane: {
    id: "thane",
    name: "Thane",
    shortName: "Thane",
    fullName: "Thane West Branch",
    address: "A204, 2nd Floor, Thakor Niwas CHS, Above Tip Top Mithaiwala, Jambli Naka, Opposite Railway Station, Thane West, Thane 400602",
    addressLine1: "A204, 2nd Floor, Thakor Niwas CHS,",
    addressLine2: "Above Tip Top Mithaiwala, Jambli Naka,",
    addressLine3: "Opposite Railway Station, Thane West, Thane 400602",
    landmark: "Above Tip Top Mithaiwala, Jambli Naka, Opposite Railway Station",
    city: "Thane",
    pincode: "400602",
    phone: "+919987588932",
    displayPhone: "+91 99875 88932",
    email: "care@amigoacademy.in",
    mapHref: "https://maps.google.com/?q=Thakor+Niwas+Jambli+Naka+Thane+West+Maharashtra",
    mapEmbedUrl: "https://maps.google.com/maps?q=Amigo%20Academy%20Thane%20Thakor%20Niwas%20Mumbai&t=&z=16&ie=UTF8&iwloc=&output=embed",
    pagePath: "/thane-branch"
  }
};
