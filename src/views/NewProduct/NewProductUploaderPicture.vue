<template>
  <div
    :style="`min-height: ${minHeight}px;`"
    class="uploader w-100 pa-4 d-flex justify-content-center align-items-center"
  >
    <div
      v-if="isCover"
      class="uploader__isCover-tag d-flex justify-content-center align-items-center"
    >
      <span class="font-size-17 grayDark--text">Capa</span>
    </div>
    <div class="uploader__content d-flex flex-column align-items-center">
      <v-img
        src="@/assets/images/products/upload.svg"
        max-width="53px"
        title="upload"
        alt="upload"
        class="uploader__content--icon"
      ></v-img>
      <span class="font-size-17 grayDark--text text-center mt-3">
        Anexar foto do produto<br />Se preferir arraste e solte a foto
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NewProductUploaderPicture',
    props: {
      minHeight: {
        type: Number,
        default: 186,
      },
      isCover: {
        type: Boolean,
        default: false,
      },
    },
  };
</script>

<style lang="scss">
  .uploader {
    background-color: #efefef;
    border: 1px solid #c14d19;
    border-radius: 12px;
    cursor: pointer;
    position: relative;
    transition: all 0.1s ease-in-out;

    &__isCover-tag {
      width: 60px;
      height: 30px;
      background-color: white;
      border: 1px solid #72bc54;
      border-radius: 6px;
      position: absolute;
      top: 16px;
      left: 16px;
    }

    &:hover {
      box-shadow: 0px 0px 10px rgba($color: #c14d19, $alpha: 0.2);
    }
  }
</style>
