<template>
  <div
    :id="reference"
    :style="`min-height: ${minHeight}px;`"
    class="uploader border-radius-12 w-100 pa-4 d-flex justify-content-center align-items-center"
    @click="uploaderClick"
    @drop.prevent="dropFile($event)"
    @dragenter.prevent
    @dragover.prevent
  >
    <input
      type="file"
      :ref="reference"
      accept="image/*"
      @change="onPickFile"
      style="display: none"
      :data-test="`${reference}-input`"
    />
    <div
      v-if="isCover"
      class="uploader__isCover-tag d-flex justify-content-center align-items-center"
    >
      <span class="font-size-17 grayDark--text">Capa</span>
    </div>
    <div
      v-if="!image"
      class="uploader__content d-flex flex-column align-items-center"
    >
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
    name: 'FormProductPicturesUploader',
    props: {
      reference: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        default: null,
      },
      minHeight: {
        type: Number,
        default: 186,
      },
      isCover: {
        type: Boolean,
        default: false,
      },
    },
    mounted() {
      if (this.image) this.setBackgroundUploader(this.image);
    },
    methods: {
      uploaderClick() {
        this.$refs[this.reference].click();
      },
      dropFile(e) {
        const files = e.dataTransfer.files;
        const file = files[0];
        this.setImageBase64(file);
      },
      onPickFile() {
        const file = this.$refs[this.reference].files[0];
        this.setImageBase64(file);
      },
      setImageBase64(file) {
        const fileReader = new FileReader();
        fileReader.addEventListener('load', () => {
          const result = fileReader.result;
          this.setBackgroundUploader(result);
          this.$emit('input', result);
        });
        fileReader.readAsDataURL(file);
      },
      setBackgroundUploader(image) {
        const uploader = document.getElementById(this.reference);
        uploader.style.backgroundImage = `url(${image})`;
      },
    },
  };
</script>

<style lang="scss">
  .uploader {
    background-color: #efefef;
    background-position: center;
    background-size: 100%;
    border: 1px solid #c14d19;
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
