(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{782:function(e,t,a){"use strict";a.r(t);var n=a(49),r=a.n(n),c=a(68),i=a.n(c),o=a(24),s=a.n(o),l=a(44),u=a.n(l),d=a(473),m=a(740),p=a(168),h=a(743),b=a(465),f=a(89),E=a(214),g=a(705),v=a(700),y=a.n(v),k=a(745),O=a(144),x=a(38),w=a(0),P=a.n(w),j=a(712),C=a(708),I=a(702),T=a(703),S=a(463),_=a(710),z=a(113),B=a(15),N=a(19),F=a.n(N);function q(e){var t=e.visible,a=e.onClose,n=e.product,r=n||{},c={_id:r._id,code:r.code,name:r.name,brand:r.brand,discount:r.discount,price:r.price,stock:r.stock,type:r.type},o=Object(w.useState)(!1),l=s()(o,2),d=l[0],m=l[1],p=function(){var e=i()(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m(!0),e.next=4,k.a.updateProduct(t);case 4:(n=e.sent)&&200===n.status&&(b.b.success("Cập nhật thành công"),a(t)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),b.b.error("Cập nhật thất bại");case 11:m(!1);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return P.a.createElement(j.a,{className:"edit-product-modal",destroyOnClose:!1,maskClosable:!1,visible:t,okText:"Cập nhật",cancelText:"Huỷ bỏ",onCancel:a,okButtonProps:{form:"editForm",htmlType:"submit"},title:"Chỉnh sửa thông tin sản phẩm",confirmLoading:d,width:1e3,centered:!0},P.a.createElement(C.a,{initialValues:c,name:"editForm",onFinish:function(e){return p(e)}},P.a.createElement(I.a,{gutter:[16,16]},P.a.createElement(T.a,{span:12},P.a.createElement(C.a.Item,{name:"_id"},P.a.createElement(S.a,{disabled:!0,size:"large",placeholder:"ID"}))),P.a.createElement(T.a,{span:12},P.a.createElement(C.a.Item,{name:"code",rules:[{required:!0,message:"Bắt buộc",whitespace:!0}]},P.a.createElement(S.a,{size:"large",placeholder:"Mã sản phẩm *"}))),P.a.createElement(T.a,{span:12},P.a.createElement(C.a.Item,{name:"name",rules:[{required:!0,message:"Bắt buộc",whitespace:!0}]},P.a.createElement(S.a,{size:"large",placeholder:"Tên sản phẩm *"}))),P.a.createElement(T.a,{span:12},P.a.createElement(C.a.Item,{name:"price",rules:[{required:!0,message:"Bắt buộc"}]},P.a.createElement(_.a,{min:0,max:9e9,step:1e5,className:"w-100",size:"large",placeholder:"Giá sản phẩm *"}))),P.a.createElement(T.a,{span:12},P.a.createElement(C.a.Item,{name:"type",rules:[{required:!0,message:"Bắt buộc"}]},P.a.createElement(z.a,{size:"large",placeholder:"Loại sản phẩm *"},B.a.PRODUCT_TYPES.map((function(e,t){return P.a.createElement(z.a.Option,{value:e.type,key:t},e.label)}))))),P.a.createElement(T.a,{span:12},P.a.createElement(C.a.Item,{name:"brand",rules:[{required:!0,message:"Bắt buộc",whitespace:!0}]},P.a.createElement(S.a,{size:"large",placeholder:"Thương hiệu *"}))),P.a.createElement(T.a,{span:12},P.a.createElement(C.a.Item,{name:"stock",rules:[{required:!0,message:"Bắt buộc"}]},P.a.createElement(_.a,{style:{width:"100%"},step:1,size:"large",min:0,max:1e5,placeholder:"Tồn kho *"}))),P.a.createElement(T.a,{span:12},P.a.createElement(C.a.Item,{name:"discount",rules:[{required:!0,message:"Bắt buộc"}]},P.a.createElement(_.a,{style:{width:"100%"},step:1,size:"large",min:0,max:100,placeholder:"Mức giảm giá *"}))))))}q.propTypes={onClose:F.a.func,product:F.a.object,visible:F.a.bool};var D=q;function L(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function X(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?L(Object(a),!0).forEach((function(t){r()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):L(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function M(){for(var e=[],t=0;t<15;++t)e.push({value:t,text:x.a.convertProductType(t)});return e}t.default=function(){var e=Object(w.useState)({visible:!1,product:null}),t=s()(e,2),a=t[0],n=t[1],r=Object(w.useState)({visible:!1,_id:""}),c=s()(r,2),o=c[0],l=c[1],v=Object(w.useState)(!1),j=s()(v,2),C=j[0],I=j[1],T=Object(w.useState)([]),S=s()(T,2),_=S[0],z=S[1],B=function(){var e=i()(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.removeProduct(t);case 3:(a=e.sent)&&200===a.status&&(b.b.success("Xoá thành công."),n=_.filter((function(e){return e._id!==t})),z(n),setTotal(total-1)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),b.b.error("Xoá thất bại, thử lại !");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();Object(w.useEffect)((function(){var e=!0;function t(){return(t=i()(u.a.mark((function t(){var a,n,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O.a.getAllProducts(-1);case 3:(a=t.sent)&&e&&(n=a.data.data,r=n.map((function(e,t){return X(X({},e),{},{key:t})})),z(r),I(!1)),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),e&&I(!1),b.b.error("Lấy danh sách sản phẩm thất bại.");case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}return I(!0),function(){t.apply(this,arguments)}(),function(){e=!1}}),[]);var N=[{title:"Mã",key:"code",dataIndex:"code",render:function(e,t){return P.a.createElement("a",{target:"blank",href:"/product/".concat(t._id)},e)}},{title:"Tên",key:"name",dataIndex:"name",render:function(e){return P.a.createElement(f.a,{title:e},x.a.reduceProductName(e,40))}},{title:"Giá",key:"price",dataIndex:"price",defaultSortOrder:"descend",sorter:function(e,t){return e.price-t.price},render:function(e){return P.a.createElement("h3",{style:{color:"#4F55C5"}},e?x.a.formatProductPrice(e):"Liên hệ")}},{title:"Loại",key:"type",dataIndex:"type",filters:M(),onFilter:function(e,t){return t.type===e},render:function(e){return x.a.convertProductType(e)}},{title:"Thương hiệu",key:"brand",dataIndex:"brand",sorter:function(e,t){return e.brand<t.brand?-1:e.brand>t.brand?1:0},render:function(e){return P.a.createElement(f.a,{title:e},x.a.reduceProductName(e,40))}},{title:"Tồn kho",key:"stock",dataIndex:"stock",defaultSortOrder:"ascend",sorter:function(e,t){return e.stock-t.stock}},{title:"Mức giảm giá",key:"discount",dataIndex:"discount",defaultSortOrder:"ascend",sorter:function(e,t){return e.discount-t.discount},render:function(e){return"".concat(e," %")}},{title:"Đánh giá",key:"rate",dataIndex:"rate",render:function(e){return x.a.calStar(e).toFixed(1)}},{title:"Hành động",key:"actions",fixed:"right",width:100,render:function(e){return P.a.createElement(P.a.Fragment,null,P.a.createElement(d.a,{onClick:function(){return l({visible:!0,_id:e._id})},className:"m-r-8 action-btn-product",style:{color:"red"}}),P.a.createElement(f.a,{title:"Chỉnh sửa",placement:"left"},P.a.createElement(m.a,{onClick:function(){n({visible:!0,product:X({},e)})},className:"m-r-8 action-btn-product",style:{color:"#444"}})),P.a.createElement(f.a,{title:"Xem chi tiết",placement:"left"},P.a.createElement("a",{target:"blank",href:"/product/".concat(e._id)},P.a.createElement(p.a,{className:"action-btn-product",style:{color:"#444"}}))))}}];return P.a.createElement("div",{className:"pos-relative p-8"},C?P.a.createElement(E.a,{tip:"Đang tải danh sách sản phẩm ...",size:"large",className:"trans-center"}):P.a.createElement(P.a.Fragment,null," ",P.a.createElement(y.a,{title:"Xác nhận xoá sản phẩm",visible:o.visible,onOk:function(){B(o._id),l({visible:!1,_id:!1})},onCancel:function(){return l({visible:!1,_id:!1})},okButtonProps:{danger:!0},okText:"Xoá",cancelText:"Huỷ bỏ"},P.a.createElement(h.a,{style:{fontSize:28,color:"#F7B217"}}),P.a.createElement("b",null," Không thể khôi phục được, bạn có chắc muốn xoá ?")),P.a.createElement(g.a,{pagination:{pageSize:10,position:["bottomCenter"],showSizeChanger:!1},className:"admin-see-product",columns:N,dataSource:_}),P.a.createElement(D,{visible:a.visible,onClose:function(e){return t=e,a=_.map((function(e){return e._id!==t._id?e:X(X({},e),t)})),z(a),void n({visible:!1});var t,a},product:a.product})))}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9BZG1pblBhZ2UvUHJvZHVjdFBhZ2UvU2VlUHJvZHVjdC9FZGl0UHJvZHVjdE1vZGFsL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL0FkbWluUGFnZS9Qcm9kdWN0UGFnZS9TZWVQcm9kdWN0L2luZGV4LmpzIl0sIm5hbWVzIjpbIkVkaXRQcm9kdWN0TW9kYWwiLCJwcm9wcyIsInZpc2libGUiLCJvbkNsb3NlIiwicHJvZHVjdCIsImluaXRWYWx1ZXMiLCJfaWQiLCJjb2RlIiwibmFtZSIsImJyYW5kIiwiZGlzY291bnQiLCJwcmljZSIsInN0b2NrIiwidHlwZSIsInVzZVN0YXRlIiwiaXNVcGRhdGluZyIsInNldElzVXBkYXRpbmciLCJvbkVkaXQiLCJ2YWx1ZSIsImFkbWluQXBpIiwidXBkYXRlUHJvZHVjdCIsInJlc3BvbnNlIiwic3RhdHVzIiwibWVzc2FnZSIsInN1Y2Nlc3MiLCJlcnJvciIsImNsYXNzTmFtZSIsImRlc3Ryb3lPbkNsb3NlIiwibWFza0Nsb3NhYmxlIiwib2tUZXh0IiwiY2FuY2VsVGV4dCIsIm9uQ2FuY2VsIiwib2tCdXR0b25Qcm9wcyIsImZvcm0iLCJodG1sVHlwZSIsInRpdGxlIiwiY29uZmlybUxvYWRpbmciLCJ3aWR0aCIsImNlbnRlcmVkIiwiaW5pdGlhbFZhbHVlcyIsIm9uRmluaXNoIiwiZ3V0dGVyIiwic3BhbiIsIkl0ZW0iLCJkaXNhYmxlZCIsInNpemUiLCJwbGFjZWhvbGRlciIsInJ1bGVzIiwicmVxdWlyZWQiLCJ3aGl0ZXNwYWNlIiwibWluIiwibWF4Iiwic3RlcCIsImNvbnN0YW50cyIsIlBST0RVQ1RfVFlQRVMiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJPcHRpb24iLCJrZXkiLCJsYWJlbCIsInN0eWxlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsIm9iamVjdCIsImJvb2wiLCJnZW5lcmF0ZUZpbHRlclR5cGUiLCJyZXN1bHQiLCJpIiwicHVzaCIsInRleHQiLCJoZWxwZXJzIiwiY29udmVydFByb2R1Y3RUeXBlIiwiU2VlUHJvZHVjdCIsImVkaXRNb2RhbCIsInNldEVkaXRNb2RhbCIsIm1vZGFsRGVsIiwic2V0TW9kYWxEZWwiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJsaXN0Iiwic2V0TGlzdCIsIm9uRGVsZXRlIiwicmVtb3ZlUHJvZHVjdCIsIm5ld0xpc3QiLCJmaWx0ZXIiLCJzZXRUb3RhbCIsInRvdGFsIiwidXNlRWZmZWN0IiwiaXNTdWJzY3JpYmUiLCJhIiwicHJvZHVjdEFwaSIsImdldEFsbFByb2R1Y3RzIiwiZGF0YSIsImdldFByb2R1Y3RMaXN0IiwiY29sdW1ucyIsImRhdGFJbmRleCIsInJlbmRlciIsInRhcmdldCIsImhyZWYiLCJyZWR1Y2VQcm9kdWN0TmFtZSIsImRlZmF1bHRTb3J0T3JkZXIiLCJzb3J0ZXIiLCJiIiwiY29sb3IiLCJmb3JtYXRQcm9kdWN0UHJpY2UiLCJmaWx0ZXJzIiwib25GaWx0ZXIiLCJyZWNvcmQiLCJyYXRlIiwiY2FsU3RhciIsInRvRml4ZWQiLCJmaXhlZCIsIkRlbGV0ZU91dGxpbmVkIiwib25DbGljayIsInBsYWNlbWVudCIsIkVkaXRPdXRsaW5lZCIsIkV5ZU91dGxpbmVkIiwidGlwIiwib25PayIsImRhbmdlciIsIldhcm5pbmdPdXRsaW5lZCIsImZvbnRTaXplIiwicGFnaW5hdGlvbiIsInBhZ2VTaXplIiwicG9zaXRpb24iLCJzaG93U2l6ZUNoYW5nZXIiLCJkYXRhU291cmNlIiwibmV3UHJvZHVjdCJdLCJtYXBwaW5ncyI6InFZQWVBLFNBQVNBLEVBQWlCQyxHQUN4QixJQUFRQyxFQUE4QkQsRUFBOUJDLFFBQVNDLEVBQXFCRixFQUFyQkUsUUFBU0MsRUFBWUgsRUFBWkcsUUFDMUIsRUFBaUVBLEdBRTdELEdBQ0VDLEVBQWEsQ0FBRUMsSUFIVixFQUFIQSxJQUdrQkMsS0FIVCxFQUFKQSxLQUdtQkMsS0FIVCxFQUFKQSxLQUdtQkMsTUFIUixFQUFMQSxN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THFCL0csRUF4THZDbUUsRUFBVUosRUFBSzFCLEtBQUksU0FBQ0MsR0FBSSxPQUM1QkEsRUFBS2xELE1BQVEySCxFQUFXM0gsSUFBTWtELEVBQU8sRUFBSCxLQUFRQSxHQUFTeUUsTUFFckQvQyxFQUFRRyxRQUNSVCxFQUFhLENBQUUxRSxTQUFTLElBTEQsSUFBQytILEVBQ2xCNUMsR0F5TEVqRixRQUFTdUUsRUFBVXZFIiwiZmlsZSI6IjE1LjQxYmU5Zjk1NDg1YjNhMDU1NjIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29sLFxuICBGb3JtLFxuICBJbnB1dCxcbiAgSW5wdXROdW1iZXIsXG4gIG1lc3NhZ2UsXG4gIE1vZGFsLFxuICBSb3csXG4gIFNlbGVjdCxcbn0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgYWRtaW5BcGkgZnJvbSAnYXBpcy9hZG1pbkFwaSc7XG5pbXBvcnQgY29uc3RhbnRzIGZyb20gJ2NvbnN0YW50cy9pbmRleCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBFZGl0UHJvZHVjdE1vZGFsKHByb3BzKSB7XG4gIGNvbnN0IHsgdmlzaWJsZSwgb25DbG9zZSwgcHJvZHVjdCB9ID0gcHJvcHM7XG4gIGNvbnN0IHsgX2lkLCBjb2RlLCBuYW1lLCBicmFuZCwgZGlzY291bnQsIHByaWNlLCBzdG9jaywgdHlwZSB9ID0gcHJvZHVjdFxuICAgID8gcHJvZHVjdFxuICAgIDoge307XG4gIGNvbnN0IGluaXRWYWx1ZXMgPSB7IF9pZCwgY29kZSwgbmFtZSwgYnJhbmQsIGRpc2NvdW50LCBwcmljZSwgc3RvY2ssIHR5cGUgfTtcbiAgY29uc3QgW2lzVXBkYXRpbmcsIHNldElzVXBkYXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIC8vIGV2ZW50OiBT4butYSBjaOG7r2Egc+G6o24gcGjhuqltXG4gIGNvbnN0IG9uRWRpdCA9IGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBzZXRJc1VwZGF0aW5nKHRydWUpO1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhZG1pbkFwaS51cGRhdGVQcm9kdWN0KHZhbHVlKTtcbiAgICAgIGlmIChyZXNwb25zZSAmJiByZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoJ0Phuq1wIG5o4bqtdCB0aMOgbmggY8O0bmcnKTtcbiAgICAgICAgb25DbG9zZSh2YWx1ZSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIG1lc3NhZ2UuZXJyb3IoJ0Phuq1wIG5o4bqtdCB0aOG6pXQgYuG6oWknKTtcbiAgICB9XG4gICAgc2V0SXNVcGRhdGluZyhmYWxzZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TW9kYWxcbiAgICAgIGNsYXNzTmFtZT1cImVkaXQtcHJvZHVjdC1tb2RhbFwiXG4gICAgICBkZXN0cm95T25DbG9zZT17ZmFsc2V9XG4gICAgICBtYXNrQ2xvc2FibGU9e2ZhbHNlfVxuICAgICAgdmlzaWJsZT17dmlzaWJsZX1cbiAgICAgIG9rVGV4dD1cIkPhuq1wIG5o4bqtdFwiXG4gICAgICBjYW5jZWxUZXh0PVwiSHXhu7cgYuG7j1wiXG4gICAgICBvbkNhbmNlbD17b25DbG9zZX1cbiAgICAgIG9rQnV0dG9uUHJvcHM9e3sgZm9ybTogJ2VkaXRGb3JtJywgaHRtbFR5cGU6ICdzdWJtaXQnIH19XG4gICAgICB0aXRsZT1cIkNo4buJbmggc+G7rWEgdGjDtG5nIHRpbiBz4bqjbiBwaOG6qW1cIlxuICAgICAgY29uZmlybUxvYWRpbmc9e2lzVXBkYXRpbmd9XG4gICAgICB3aWR0aD17MTAwMH1cbiAgICAgIGNlbnRlcmVkPlxuICAgICAgPEZvcm1cbiAgICAgICAgaW5pdGlhbFZhbHVlcz17aW5pdFZhbHVlc31cbiAgICAgICAgbmFtZT1cImVkaXRGb3JtXCJcbiAgICAgICAgb25GaW5pc2g9eyh2YWx1ZSkgPT4gb25FZGl0KHZhbHVlKX0+XG4gICAgICAgIDxSb3cgZ3V0dGVyPXtbMTYsIDE2XX0+XG4gICAgICAgICAgey8qIElkICovfVxuICAgICAgICAgIDxDb2wgc3Bhbj17MTJ9PlxuICAgICAgICAgICAgPEZvcm0uSXRlbSBuYW1lPVwiX2lkXCI+XG4gICAgICAgICAgICAgIDxJbnB1dCBkaXNhYmxlZCBzaXplPVwibGFyZ2VcIiBwbGFjZWhvbGRlcj1cIklEXCIgLz5cbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgIDwvQ29sPlxuXG4gICAgICAgICAgey8qIE3DoyBz4bqjbiBwaOG6qW0gKi99XG4gICAgICAgICAgPENvbCBzcGFuPXsxMn0+XG4gICAgICAgICAgICA8Rm9ybS5JdGVtXG4gICAgICAgICAgICAgIG5hbWU9XCJjb2RlXCJcbiAgICAgICAgICAgICAgcnVsZXM9e1tcbiAgICAgICAgICAgICAgICB7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAnQuG6r3QgYnXhu5ljJywgd2hpdGVzcGFjZTogdHJ1ZSB9LFxuICAgICAgICAgICAgICBdfT5cbiAgICAgICAgICAgICAgPElucHV0IHNpemU9XCJsYXJnZVwiIHBsYWNlaG9sZGVyPVwiTcOjIHPhuqNuIHBo4bqpbSAqXCIgLz5cbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgIDwvQ29sPlxuXG4gICAgICAgICAgey8qIFTDqm4gc+G6o24gcGjhuqltICovfVxuICAgICAgICAgIDxDb2wgc3Bhbj17MTJ9PlxuICAgICAgICAgICAgPEZvcm0uSXRlbVxuICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgIHJ1bGVzPXtbXG4gICAgICAgICAgICAgICAgeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ0Lhuq90IGJ14buZYycsIHdoaXRlc3BhY2U6IHRydWUgfSxcbiAgICAgICAgICAgICAgXX0+XG4gICAgICAgICAgICAgIDxJbnB1dCBzaXplPVwibGFyZ2VcIiBwbGFjZWhvbGRlcj1cIlTDqm4gc+G6o24gcGjhuqltICpcIiAvPlxuICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgPC9Db2w+XG5cbiAgICAgICAgICB7LyogR2nDoSBz4bqjbiBwaOG6qW0gKi99XG4gICAgICAgICAgPENvbCBzcGFuPXsxMn0+XG4gICAgICAgICAgICA8Rm9ybS5JdGVtXG4gICAgICAgICAgICAgIG5hbWU9XCJwcmljZVwiXG4gICAgICAgICAgICAgIHJ1bGVzPXtbeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ0Lhuq90IGJ14buZYycgfV19PlxuICAgICAgICAgICAgICA8SW5wdXROdW1iZXJcbiAgICAgICAgICAgICAgICBtaW49ezB9XG4gICAgICAgICAgICAgICAgbWF4PXs5MDAwMDAwMDAwfVxuICAgICAgICAgICAgICAgIHN0ZXA9ezEwMDAwMH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEwMFwiXG4gICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkdpw6Egc+G6o24gcGjhuqltICpcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgPC9Db2w+XG5cbiAgICAgICAgICB7LyogTG/huqFpIHPhuqNuIHBo4bqpbSAqL31cbiAgICAgICAgICA8Q29sIHNwYW49ezEyfT5cbiAgICAgICAgICAgIDxGb3JtLkl0ZW1cbiAgICAgICAgICAgICAgbmFtZT1cInR5cGVcIlxuICAgICAgICAgICAgICBydWxlcz17W3sgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICdC4bqvdCBideG7mWMnIH1dfT5cbiAgICAgICAgICAgICAgPFNlbGVjdCBzaXplPVwibGFyZ2VcIiBwbGFjZWhvbGRlcj1cIkxv4bqhaSBz4bqjbiBwaOG6qW0gKlwiPlxuICAgICAgICAgICAgICAgIHtjb25zdGFudHMuUFJPRFVDVF9UWVBFUy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT17aXRlbS50eXBlfSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW0ubGFiZWx9XG4gICAgICAgICAgICAgICAgICA8L1NlbGVjdC5PcHRpb24+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgPC9Db2w+XG5cbiAgICAgICAgICB7LyogVGjGsMahbmcgaGnhu4d1ICovfVxuICAgICAgICAgIDxDb2wgc3Bhbj17MTJ9PlxuICAgICAgICAgICAgPEZvcm0uSXRlbVxuICAgICAgICAgICAgICBuYW1lPVwiYnJhbmRcIlxuICAgICAgICAgICAgICBydWxlcz17W1xuICAgICAgICAgICAgICAgIHsgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICdC4bqvdCBideG7mWMnLCB3aGl0ZXNwYWNlOiB0cnVlIH0sXG4gICAgICAgICAgICAgIF19PlxuICAgICAgICAgICAgICA8SW5wdXQgc2l6ZT1cImxhcmdlXCIgcGxhY2Vob2xkZXI9XCJUaMawxqFuZyBoaeG7h3UgKlwiIC8+XG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICA8L0NvbD5cblxuICAgICAgICAgIHsvKiBU4buTbiBraG8gKi99XG4gICAgICAgICAgPENvbCBzcGFuPXsxMn0+XG4gICAgICAgICAgICA8Rm9ybS5JdGVtXG4gICAgICAgICAgICAgIG5hbWU9XCJzdG9ja1wiXG4gICAgICAgICAgICAgIHJ1bGVzPXtbeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ0Lhuq90IGJ14buZYycgfV19PlxuICAgICAgICAgICAgICA8SW5wdXROdW1iZXJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19XG4gICAgICAgICAgICAgICAgc3RlcD17MX1cbiAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgICAgIG1pbj17MH1cbiAgICAgICAgICAgICAgICBtYXg9ezEwMDAwMH1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlThu5NuIGtobyAqXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgIDwvQ29sPlxuXG4gICAgICAgICAgey8qIE3hu6ljIGdp4bqjbSBnacOhICovfVxuICAgICAgICAgIDxDb2wgc3Bhbj17MTJ9PlxuICAgICAgICAgICAgPEZvcm0uSXRlbVxuICAgICAgICAgICAgICBuYW1lPVwiZGlzY291bnRcIlxuICAgICAgICAgICAgICBydWxlcz17W3sgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICdC4bqvdCBideG7mWMnIH1dfT5cbiAgICAgICAgICAgICAgPElucHV0TnVtYmVyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fVxuICAgICAgICAgICAgICAgIHN0ZXA9ezF9XG4gICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgICBtaW49ezB9XG4gICAgICAgICAgICAgICAgbWF4PXsxMDB9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJN4bupYyBnaeG6o20gZ2nDoSAqXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz5cbiAgICAgIDwvRm9ybT5cbiAgICA8L01vZGFsPlxuICApO1xufVxuXG5FZGl0UHJvZHVjdE1vZGFsLnByb3BUeXBlcyA9IHtcbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG4gIHByb2R1Y3Q6IFByb3BUeXBlcy5vYmplY3QsXG4gIHZpc2libGU6IFByb3BUeXBlcy5ib29sLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRWRpdFByb2R1Y3RNb2RhbDtcbiIsImltcG9ydCB7XG4gIERlbGV0ZU91dGxpbmVkLFxuICBFZGl0T3V0bGluZWQsXG4gIEV5ZU91dGxpbmVkLFxuICBXYXJuaW5nT3V0bGluZWQsXG59IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcbmltcG9ydCB7IG1lc3NhZ2UsIFBhZ2luYXRpb24sIFNwaW4sIFRhYmxlLCBUb29sdGlwIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgTW9kYWwgZnJvbSAnYW50ZC9saWIvbW9kYWwvTW9kYWwnO1xuaW1wb3J0IGFkbWluQXBpIGZyb20gJ2FwaXMvYWRtaW5BcGknO1xuaW1wb3J0IHByb2R1Y3RBcGkgZnJvbSAnYXBpcy9wcm9kdWN0QXBpJztcbmltcG9ydCBoZWxwZXJzIGZyb20gJ2hlbHBlcnMnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRWRpdFByb2R1Y3RNb2RhbCBmcm9tICcuL0VkaXRQcm9kdWN0TW9kYWwnO1xuXG5mdW5jdGlvbiBnZW5lcmF0ZUZpbHRlclR5cGUoKSB7XG4gIGxldCByZXN1bHQgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNTsgKytpKSB7XG4gICAgcmVzdWx0LnB1c2goeyB2YWx1ZTogaSwgdGV4dDogaGVscGVycy5jb252ZXJ0UHJvZHVjdFR5cGUoaSkgfSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gU2VlUHJvZHVjdCgpIHtcbiAgY29uc3QgW2VkaXRNb2RhbCwgc2V0RWRpdE1vZGFsXSA9IHVzZVN0YXRlKHsgdmlzaWJsZTogZmFsc2UsIHByb2R1Y3Q6IG51bGwgfSk7XG4gIGNvbnN0IFttb2RhbERlbCwgc2V0TW9kYWxEZWxdID0gdXNlU3RhdGUoeyB2aXNpYmxlOiBmYWxzZSwgX2lkOiAnJyB9KTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2xpc3QsIHNldExpc3RdID0gdXNlU3RhdGUoW10pO1xuXG4gIC8vIGV2ZW50OiB4b8OhIHPhuqNuIHBo4bqpbVxuICBjb25zdCBvbkRlbGV0ZSA9IGFzeW5jIChfaWQpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhZG1pbkFwaS5yZW1vdmVQcm9kdWN0KF9pZCk7XG4gICAgICBpZiAocmVzcG9uc2UgJiYgcmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgbWVzc2FnZS5zdWNjZXNzKCdYb8OhIHRow6BuaCBjw7RuZy4nKTtcbiAgICAgICAgY29uc3QgbmV3TGlzdCA9IGxpc3QuZmlsdGVyKChpdGVtKSA9PiBpdGVtLl9pZCAhPT0gX2lkKTtcbiAgICAgICAgc2V0TGlzdChuZXdMaXN0KTtcbiAgICAgICAgc2V0VG90YWwodG90YWwgLSAxKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgbWVzc2FnZS5lcnJvcignWG/DoSB0aOG6pXQgYuG6oWksIHRo4butIGzhuqFpICEnKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gZXZlbnQ6IGPhuq1wIG5o4bqtdCBz4bqjbiBwaOG6qW1cbiAgY29uc3Qgb25DbG9zZUVkaXRNb2RhbCA9IChuZXdQcm9kdWN0KSA9PiB7XG4gICAgY29uc3QgbmV3TGlzdCA9IGxpc3QubWFwKChpdGVtKSA9PlxuICAgICAgaXRlbS5faWQgIT09IG5ld1Byb2R1Y3QuX2lkID8gaXRlbSA6IHsgLi4uaXRlbSwgLi4ubmV3UHJvZHVjdCB9LFxuICAgICk7XG4gICAgc2V0TGlzdChuZXdMaXN0KTtcbiAgICBzZXRFZGl0TW9kYWwoeyB2aXNpYmxlOiBmYWxzZSB9KTtcbiAgfTtcblxuICAvLyBldmVudDogTOG6pXkgdG/DoG4gYuG7mSBkYW5oIHPDoWNoIHPhuqNuIHBo4bqpbVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBpc1N1YnNjcmliZSA9IHRydWU7XG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgIGFzeW5jIGZ1bmN0aW9uIGdldFByb2R1Y3RMaXN0KCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBwcm9kdWN0QXBpLmdldEFsbFByb2R1Y3RzKC0xKTtcbiAgICAgICAgaWYgKHJlc3BvbnNlICYmIGlzU3Vic2NyaWJlKSB7XG4gICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgIGNvbnN0IGxpc3QgPSBkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7IC4uLml0ZW0sIGtleTogaW5kZXggfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBzZXRMaXN0KGxpc3QpO1xuICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGlmIChpc1N1YnNjcmliZSkgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgbWVzc2FnZS5lcnJvcignTOG6pXkgZGFuaCBzw6FjaCBz4bqjbiBwaOG6qW0gdGjhuqV0IGLhuqFpLicpO1xuICAgICAgfVxuICAgIH1cbiAgICBnZXRQcm9kdWN0TGlzdCgpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlzU3Vic2NyaWJlID0gZmFsc2U7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIC8vIEPhu5l0IGPhu6dhIGLhuqNuZ1xuICBjb25zdCBjb2x1bW5zID0gW1xuICAgIHtcbiAgICAgIHRpdGxlOiAnTcOjJyxcbiAgICAgIGtleTogJ2NvZGUnLFxuICAgICAgZGF0YUluZGV4OiAnY29kZScsXG4gICAgICByZW5kZXI6IChjb2RlLCBkYXRhKSA9PiAoXG4gICAgICAgIDxhIHRhcmdldD1cImJsYW5rXCIgaHJlZj17YC9wcm9kdWN0LyR7ZGF0YS5faWR9YH0+XG4gICAgICAgICAge2NvZGV9XG4gICAgICAgIDwvYT5cbiAgICAgICksXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ1TDqm4nLFxuICAgICAga2V5OiAnbmFtZScsXG4gICAgICBkYXRhSW5kZXg6ICduYW1lJyxcbiAgICAgIHJlbmRlcjogKG5hbWUpID0+IChcbiAgICAgICAgPFRvb2x0aXAgdGl0bGU9e25hbWV9PntoZWxwZXJzLnJlZHVjZVByb2R1Y3ROYW1lKG5hbWUsIDQwKX08L1Rvb2x0aXA+XG4gICAgICApLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdHacOhJyxcbiAgICAgIGtleTogJ3ByaWNlJyxcbiAgICAgIGRhdGFJbmRleDogJ3ByaWNlJyxcbiAgICAgIGRlZmF1bHRTb3J0T3JkZXI6ICdkZXNjZW5kJyxcbiAgICAgIHNvcnRlcjogKGEsIGIpID0+IGEucHJpY2UgLSBiLnByaWNlLFxuICAgICAgcmVuZGVyOiAocHJpY2UpID0+IChcbiAgICAgICAgPGgzIHN0eWxlPXt7IGNvbG9yOiAnIzRGNTVDNScgfX0+XG4gICAgICAgICAge3ByaWNlID8gaGVscGVycy5mb3JtYXRQcm9kdWN0UHJpY2UocHJpY2UpIDogJ0xpw6puIGjhu4cnfVxuICAgICAgICA8L2gzPlxuICAgICAgKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnTG/huqFpJyxcbiAgICAgIGtleTogJ3R5cGUnLFxuICAgICAgZGF0YUluZGV4OiAndHlwZScsXG4gICAgICBmaWx0ZXJzOiBnZW5lcmF0ZUZpbHRlclR5cGUoKSxcbiAgICAgIG9uRmlsdGVyOiAodmFsdWUsIHJlY29yZCkgPT4gcmVjb3JkLnR5cGUgPT09IHZhbHVlLFxuICAgICAgcmVuZGVyOiAodHlwZSkgPT4gaGVscGVycy5jb252ZXJ0UHJvZHVjdFR5cGUodHlwZSksXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ1RoxrDGoW5nIGhp4buHdScsXG4gICAgICBrZXk6ICdicmFuZCcsXG4gICAgICBkYXRhSW5kZXg6ICdicmFuZCcsXG4gICAgICBzb3J0ZXI6IChhLCBiKSA9PiB7XG4gICAgICAgIGlmIChhLmJyYW5kIDwgYi5icmFuZCkgcmV0dXJuIC0xO1xuICAgICAgICBpZiAoYS5icmFuZCA+IGIuYnJhbmQpIHJldHVybiAxO1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH0sXG4gICAgICByZW5kZXI6IChicmFuZCkgPT4gKFxuICAgICAgICA8VG9vbHRpcCB0aXRsZT17YnJhbmR9PntoZWxwZXJzLnJlZHVjZVByb2R1Y3ROYW1lKGJyYW5kLCA0MCl9PC9Ub29sdGlwPlxuICAgICAgKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnVOG7k24ga2hvJyxcbiAgICAgIGtleTogJ3N0b2NrJyxcbiAgICAgIGRhdGFJbmRleDogJ3N0b2NrJyxcbiAgICAgIGRlZmF1bHRTb3J0T3JkZXI6ICdhc2NlbmQnLFxuICAgICAgc29ydGVyOiAoYSwgYikgPT4gYS5zdG9jayAtIGIuc3RvY2ssXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ03hu6ljIGdp4bqjbSBnacOhJyxcbiAgICAgIGtleTogJ2Rpc2NvdW50JyxcbiAgICAgIGRhdGFJbmRleDogJ2Rpc2NvdW50JyxcbiAgICAgIGRlZmF1bHRTb3J0T3JkZXI6ICdhc2NlbmQnLFxuICAgICAgc29ydGVyOiAoYSwgYikgPT4gYS5kaXNjb3VudCAtIGIuZGlzY291bnQsXG4gICAgICByZW5kZXI6IChkaXNjb3VudCkgPT4gYCR7ZGlzY291bnR9ICVgLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICfEkMOhbmggZ2nDoScsXG4gICAgICBrZXk6ICdyYXRlJyxcbiAgICAgIGRhdGFJbmRleDogJ3JhdGUnLFxuICAgICAgcmVuZGVyOiAocmF0ZSkgPT4gaGVscGVycy5jYWxTdGFyKHJhdGUpLnRvRml4ZWQoMSksXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ0jDoG5oIMSR4buZbmcnLFxuICAgICAga2V5OiAnYWN0aW9ucycsXG4gICAgICBmaXhlZDogJ3JpZ2h0JyxcbiAgICAgIHdpZHRoOiAxMDAsXG4gICAgICByZW5kZXI6ICh0ZXh0KSA9PiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPERlbGV0ZU91dGxpbmVkXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRNb2RhbERlbCh7IHZpc2libGU6IHRydWUsIF9pZDogdGV4dC5faWQgfSl9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtLXItOCBhY3Rpb24tYnRuLXByb2R1Y3RcIlxuICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIkNo4buJbmggc+G7rWFcIiBwbGFjZW1lbnQ9XCJsZWZ0XCI+XG4gICAgICAgICAgICA8RWRpdE91dGxpbmVkXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRFZGl0TW9kYWwoeyB2aXNpYmxlOiB0cnVlLCBwcm9kdWN0OiB7IC4uLnRleHQgfSB9KTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibS1yLTggYWN0aW9uLWJ0bi1wcm9kdWN0XCJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6ICcjNDQ0JyB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L1Rvb2x0aXA+XG5cbiAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIlhlbSBjaGkgdGnhur90XCIgcGxhY2VtZW50PVwibGVmdFwiPlxuICAgICAgICAgICAgPGEgdGFyZ2V0PVwiYmxhbmtcIiBocmVmPXtgL3Byb2R1Y3QvJHt0ZXh0Ll9pZH1gfT5cbiAgICAgICAgICAgICAgPEV5ZU91dGxpbmVkXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWN0aW9uLWJ0bi1wcm9kdWN0XCJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogJyM0NDQnIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICA8Lz5cbiAgICAgICksXG4gICAgfSxcbiAgXTtcblxuICAvLyByZW5kZXJpbmcgLi4uXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwb3MtcmVsYXRpdmUgcC04XCI+XG4gICAgICB7aXNMb2FkaW5nID8gKFxuICAgICAgICA8U3BpblxuICAgICAgICAgIHRpcD1cIsSQYW5nIHThuqNpIGRhbmggc8OhY2ggc+G6o24gcGjhuqltIC4uLlwiXG4gICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ0cmFucy1jZW50ZXJcIlxuICAgICAgICAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPD5cbiAgICAgICAgICB7JyAnfVxuICAgICAgICAgIHsvKiBtb2RhbCBjb25maXJtIGRlbGV0ZSBwcm9kdWN0ICovfVxuICAgICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgdGl0bGU9XCJYw6FjIG5o4bqtbiB4b8OhIHPhuqNuIHBo4bqpbVwiXG4gICAgICAgICAgICB2aXNpYmxlPXttb2RhbERlbC52aXNpYmxlfVxuICAgICAgICAgICAgb25Paz17KCkgPT4ge1xuICAgICAgICAgICAgICBvbkRlbGV0ZShtb2RhbERlbC5faWQpO1xuICAgICAgICAgICAgICBzZXRNb2RhbERlbCh7IHZpc2libGU6IGZhbHNlLCBfaWQ6IGZhbHNlIH0pO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uQ2FuY2VsPXsoKSA9PiBzZXRNb2RhbERlbCh7IHZpc2libGU6IGZhbHNlLCBfaWQ6IGZhbHNlIH0pfVxuICAgICAgICAgICAgb2tCdXR0b25Qcm9wcz17eyBkYW5nZXI6IHRydWUgfX1cbiAgICAgICAgICAgIG9rVGV4dD1cIlhvw6FcIlxuICAgICAgICAgICAgY2FuY2VsVGV4dD1cIkh14bu3IGLhu49cIj5cbiAgICAgICAgICAgIDxXYXJuaW5nT3V0bGluZWQgc3R5bGU9e3sgZm9udFNpemU6IDI4LCBjb2xvcjogJyNGN0IyMTcnIH19IC8+XG4gICAgICAgICAgICA8Yj4gS2jDtG5nIHRo4buDIGtow7RpIHBo4bulYyDEkcaw4bujYywgYuG6oW4gY8OzIGNo4bqvYyBtdeG7kW4geG/DoSA/PC9iPlxuICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgICAgey8qIHRhYmxlIHNob3cgcHJvZHVjdCBsaXN0ICovfVxuICAgICAgICAgIDxUYWJsZVxuICAgICAgICAgICAgcGFnaW5hdGlvbj17e1xuICAgICAgICAgICAgICBwYWdlU2l6ZTogMTAsXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBbJ2JvdHRvbUNlbnRlciddLFxuICAgICAgICAgICAgICBzaG93U2l6ZUNoYW5nZXI6IGZhbHNlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFkbWluLXNlZS1wcm9kdWN0XCJcbiAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XG4gICAgICAgICAgICBkYXRhU291cmNlPXtsaXN0fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgey8qIGVkaXQgcHJvZHVjdCBtb2RhbCAqL31cbiAgICAgICAgICA8RWRpdFByb2R1Y3RNb2RhbFxuICAgICAgICAgICAgdmlzaWJsZT17ZWRpdE1vZGFsLnZpc2libGV9XG4gICAgICAgICAgICBvbkNsb3NlPXsodmFsdWUpID0+IG9uQ2xvc2VFZGl0TW9kYWwodmFsdWUpfVxuICAgICAgICAgICAgcHJvZHVjdD17ZWRpdE1vZGFsLnByb2R1Y3R9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTZWVQcm9kdWN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==