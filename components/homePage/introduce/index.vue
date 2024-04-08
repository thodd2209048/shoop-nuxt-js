<script setup lang="ts">
import { ref } from 'vue'
import { productTags } from '@/states/productTags'

const tags = ref(productTags)
</script>

<template>
  <div class="bg-white py-10 border-b-2">
    <div class="container  px-2">
      <ui-sub-area-content title="SHOOP - GÌ CŨNG CÓ, MUA HẾT Ở SHOOP ">
        <div class="mb-3">
          <p><b>Shoop</b> - ứng dụng mua sắm trực tuyến thú vị, tin cậy, an toàn và miễn phí!
            Shoop là nền tảng giao dịch
            trực
            tuyến hàng đầu ở Đông Nam Á, có trụ sở chính ở Singapore, đã có mặt ở khắp các khu vực Singapore, Malaysia,
            Indonesia, Thái Lan, Philippines. Với sự đảm bảo của Shoop, bạn sẽ mua
            hàng trực tuyến an tâm và nhanh chóng hơn bao giờ hết!</p>
        </div>
      </ui-sub-area-content>
      <ui-sub-area-content title="MUA SẮM VÀ BÁN HÀNG ONLINE ĐƠN GIẢN, NHANH CHÓNG VÀ AN TOÀN">
        <div class="mb-3"><p>Nếu bạn đang tìm kiếm một trang web để mua và bán hàng trực tuyến thì Shoop.vn là
          một sự lựa chọn tuyệt vời
          dành cho bạn. Shoop là trang thương mại điện tử cho phép
          người mua và người bán tương tác và trao đổi dễ dàng thông tin về sản phẩm và chương trình khuyến mãi của
          shop.
          Do đó, việc mua bán trên Shoop trở nên nhanh chóng và
          đơn giản hơn. Bạn có thể trò chuyện trực tiếp với nhà bán hàng để hỏi trực tiếp về mặt hàng cần mua. Còn nếu
          bạn
          muốn tìm mua những dòng sản phẩm chính hãng, uy tín,
          Shoop chính là sự lựa chọn lí tưởng dành cho bạn. Để bạn có thể dễ dàng khi tìm hiểu và sử dụng sản phẩm,
          Shoop
          Blog - trang blog thông tin chính thức của Shoop -
          sẽ giúp bạn có thể tìm được cho mình các kiến thức về xu hướng thời trang, review công nghệ, mẹo làm đẹp, tin
          tức tiêu dùng và deal giá tốt bất ngờ.</p></div>
        <div class="mb-3"><p>Đến với Shoop, cơ hội để trở thành một nhà bán hàng dễ dàng hơn bao giờ hết. Chỉ
          với vài thao tác trên ứng
          dụng, bạn đã có thể đăng bán ngay những sản phẩm của mình.
          Không những thế, các nhà bán hàng có thể tự tạo chương trình khuyến mãi trên Shoop để thu hút người mua với
          những sản phẩm có mức giá hấp dẫn. Khi đăng nhập tại
          Shoop Kênh người bán, bạn có thể dễ dàng phân loại sản phẩm, theo dõi đơn hàng, chăm sóc khách hàng và cập
          nhập
          ngay các hoạt động của shop.</p></div>
        <div class="mb-3"><p>Bên cạnh đó, Shoop hợp tác với nhiều đơn vị vận chuyển uy tín trên thị trường
          như SPX,... nhằm cung cấp dịch
          vu
          giao nhận và vận chuyển tiện lợi cho cả khách hàng và
          người bán. Cùng với nhiều ưu đãi với chi phí giao hàng hợp lý, Shoop đảm bảo cho khách hàng trải nghiệm mua
          sắm
          thuận tiện nhất.</p></div>
      </ui-sub-area-content>
      <ui-sub-area-content title="TOP TỪ KHÓA XU HƯỚNG">
        <ui-tag-list :tags="tags"></ui-tag-list>
      </ui-sub-area-content>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>