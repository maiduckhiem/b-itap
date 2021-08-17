import Product from "../model/product";

export const list = (req, res) => {
  Product.find((err, data) => {
    if (err) {
      res.status(400).json({
        error: "khong the hien thi",
      });
    }
    res.json(data);
  });
};
export const add = (req, res) => {
  const product = new Product(req.body);
  product.save((err, data) => {
    if (err) {
      res.status(400).json({
        error: "khong them dc san pham",
      });
    }
    res.json(data);
  });
};

export const read = (req, res) => {
  return res.json(req.product);
};
export const productId = (req, res, next, id) => {
  Product.findById(id).exec((err, product) => {
    if (err || !product) {
      res.status(400).json({
        error: "khong tim thay id",
      });
    }
    req.product = product;
    next();
  });
};

export const remove = (req, res) => {
  let product = req.product;
  product.remove((err, deleteproduct) => {
    if (err) {
      res.status(400).json({
        error: "khong xoa dc san pham",
      });
    }
    res.json({
      deleteproduct,
      message: "xoa thanh cong",
    });
  });
};
