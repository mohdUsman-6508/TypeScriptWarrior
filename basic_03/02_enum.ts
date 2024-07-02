// restrict the choice , or options within the boundary
// put the const before enum , will generate cleaner js code

const enum size {
  S = 24,
  M,
  L,
  XL = 38,
  XXL,
}

const tshirt = size.M;

export {};
