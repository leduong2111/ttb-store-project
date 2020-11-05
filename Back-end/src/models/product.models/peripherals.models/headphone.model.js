const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const headphoneSchema = new Schema({
  // _id sản phẩm bên ProductModel
  idProduct: { type: Schema.Types.ObjectId, required: true },

  // kiểu tai nghe 0 - Over-ear, 1 - In-ear, 2 - On-ear, 3 - KHT
  type: {
    type: Number,
    enum: [...Array(4).keys()],
    required: true,
    default: 0,
  },

  // chuẩn kết nối
  // 0 - 3.5mm, 1 - bluetooth, 2 - USB
  connectionStd: { type: Number, enum: [...Array(3).keys()], default: 0 },

  // thời gian bảo hành tính theo tháng
  warranty: { type: Number, default: 0 },

  // các hình ảnh của sản phẩm
  catalogs: [String],

  // bài viết mô tả chi tiết ở DescriptionModel
  details: Schema.Types.ObjectId,
});

const HeadphoneModel = mongoose.model(
  'headphone',
  headphoneSchema,
  'headphones',
);

module.exports = HeadphoneModel;
