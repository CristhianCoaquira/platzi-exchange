<template>
  <div>
    <bounce-loader
      :loading="isLoading"
      color="#68d391"
      :size="100"
    ></bounce-loader>
    <PxAssetsTable v-if="!isLoading" :assets="assets"></PxAssetsTable>
  </div>
</template>
<script>
import api from "@/api";
import PxAssetsTable from "@/components/PxAssetsTable.vue";

export default {
  name: "ViewHome",
  components: { PxAssetsTable },
  data() {
    return {
      isLoading: false,
      assets: [],
    };
  },
  created() {
    this.isLoading = true;
    api
      .getAssets()
      .then((assets) => {
        this.assets = assets;
      })
      .finally(() => (this.isLoading = false));
  },
};
</script>