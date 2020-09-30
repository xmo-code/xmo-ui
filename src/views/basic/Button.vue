<template>
  <div>
    <div>
      <router-link to="/">返回</router-link>
      <h1>Button按钮</h1>
      <span>常规的操作按钮</span>
    </div>
    <div>
      <h2>基础用法</h2>
      <span>基础按钮用法</span>
      <div>
        <div>
          <xmo-button>默认按钮</xmo-button>
          <xmo-button type="primary">主要按钮</xmo-button>
          <xmo-button type="success">成功按钮</xmo-button>
          <xmo-button type="info">信息按钮</xmo-button>
          <xmo-button type="warning">警告按钮</xmo-button>
          <xmo-button type="error">危险按钮</xmo-button>
        </div>
        <div>
          <xmo-button no-radius>默认按钮</xmo-button>
          <xmo-button no-radius type="primary">主要按钮</xmo-button>
          <xmo-button no-radius type="success">成功按钮</xmo-button>
          <xmo-button no-radius type="info">信息按钮</xmo-button>
          <xmo-button no-radius type="warning">警告按钮</xmo-button>
          <xmo-button no-radius type="error">危险按钮</xmo-button>
        </div>
        <div>
          <xmo-button plain>默认按钮</xmo-button>
          <xmo-button plain type="primary">主要按钮</xmo-button>
          <xmo-button plain type="success">成功按钮</xmo-button>
          <xmo-button plain type="info">信息按钮</xmo-button>
          <xmo-button plain type="warning">警告按钮</xmo-button>
          <xmo-button plain type="error">危险按钮</xmo-button>
        </div>
        <div>
          <xmo-button round>默认按钮</xmo-button>
          <xmo-button round type="primary">主要按钮</xmo-button>
          <xmo-button round type="success">成功按钮</xmo-button>
          <xmo-button round type="info">信息按钮</xmo-button>
          <xmo-button round type="warning">警告按钮</xmo-button>
          <xmo-button round type="error">危险按钮</xmo-button>
        </div>

        <div>
          <xmo-button long>默认按钮</xmo-button>
          <xmo-button long type="primary">主要按钮</xmo-button>
          <xmo-button long type="success">成功按钮</xmo-button>
          <xmo-button long type="info">信息按钮</xmo-button>
          <xmo-button long type="warning">警告按钮</xmo-button>
          <xmo-button long type="error">危险按钮</xmo-button>
        </div>
      </div>
    </div>
    <div>
      <h2>按钮组</h2>
      <xmo-button-group>
        <xmo-button>1</xmo-button>
        <xmo-button>2</xmo-button>
        <xmo-button>3</xmo-button>
        <xmo-button>4</xmo-button>
      </xmo-button-group>
    </div>
  </div>
</template>

<script>
import XmoButtonGroup from "../../components/button/button-group";
import XmoButton from "../../components/button/button";
export default {
  name: "Button",
  components: { XmoButton, XmoButtonGroup }
};
</script>

<style lang="scss"></style>
