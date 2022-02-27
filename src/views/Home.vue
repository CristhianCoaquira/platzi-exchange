<template>
  <PxAssetsTable :assets="assets"></PxAssetsTable>
</template>
<script>
import api from "@/api";
import PxAssetsTable from "@/components/PxAssetsTable.vue";

export default {
  name: "ViewHome",
  components: { PxAssetsTable },
  data() {
    return {
      assets: [],
    };
  },
  created() {
    api.getAssets().then((assets) => { this.assets = assets });
  },
};
</script>