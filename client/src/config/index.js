export const registerFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "Category",
    componentType: "select",
    options: [
      { id: "plants", label: "Plants" },
      { id: "seeds", label: "Seeds" },
      { id: "pots", label: "Pots" },
      { id: "gifting", label: "Gifting" },
      { id: "tools", label: "Tools" },
    ],
  },
  {
    label: "Care",
    name: "Care",
    componentType: "select",
    options: [
      { id: "beginner", label: "Beginner-Friendly" },
      { id: "low", label: "Low-Care" },
      { id: "medium", label: "Medium-Care" },
      { id: "high", label: "High-Care" },
      { id: "zara", label: "Zara" },
      { id: "h&m", label: "H&M" },
    ],
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional)",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];

export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "Home",
    path: "/shop/home",
  },
  {
    id: "products",
    label: "Products",
    path: "/shop/listing",
  },
  {
    id: "plants",
    label: "Plants",
    path: "/shop/listing",
  },
  {
    id: "seeds",
    label: "Seeds",
    path: "/shop/listing",
  },
  {
    id: "pots",
    label: "Pots",
    path: "/shop/listing",
  },
  {
    id: "tools",
    label: "Tools",
    path: "/shop/listing",
  },
  {
    id: "gifting",
    label: "Gifting",
    path: "/shop/listing",
  },
  {
    id: "search",
    label: "Search",
    path: "/shop/search",
  },
];

export const categoryOptionsMap = {
  plants: "Plants",
  seeds: "Seeds",
  pots: "Pots",
  gifting: "Gifting",
  tools: "Tools",
};

export const brandOptionsMap = {
  beginner: "Beginner-Friendly",
  low: "Low-Care",
  medium: "Medium-Care",
  high: "High-Care",
  zara: "Zara",
  "h&m": "H&M",
};

export const filterOptions = {
  Category: [
    { id: "plants", label: "Plants" },
    { id: "seeds", label: "Seeds" },
    { id: "pots", label: "Pots" },
    { id: "gifting", label: "Gifting" },
    { id: "tools", label: "Tools" },
  ],
  Care: [
    { id: "beginner", label: "Beginner-Friendly" },
    { id: "low", label: "Low-Care" },
    { id: "medium", label: "Medium-Care" },
    { id: "high", label: "High-Care" },
    { id: "zara", label: "Zara" },
    { id: "h&m", label: "H&M" },
  ],
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const addressFormControls = [
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Enter your city",
  },
  {
    label: "Pincode",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Enter your pincode",
  },
  {
    label: "Phone",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    label: "Notes",
    name: "notes",
    componentType: "textarea",
    placeholder: "Enter any additional notes",
  },
];
