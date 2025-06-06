<template>
  <el-dialog model-value width="1084px">
    <div class="flex">
      <div class="flex-1">
        <div class="flex">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
        <div>
          <p class="text-2xl text-black">选择购买时长</p>
          <div class="flex gap-[22px]">
            <div class="w-[280px] h-[130px] border rounded-md p-5 bg-[#F5F6FA]">
              <div class="text-sm text-black">1个月</div>
              <div class="text-[#333] text-sm mt-4">
                <span class="text-black text-[20px]">¥</span>
                <span class="text-black text-[32px]">88</span>
                /月
              </div>
            </div>
            <div class="w-[280px] h-[130px] border rounded-md p-5 bg-[#F5F6FA]">
              <div class="text-sm text-black">1个月</div>
              <div class="text-[#333] text-sm mt-4">
                <span class="text-black text-[20px]">¥</span>
                <span class="text-black text-[32px]">88</span>
                /月
              </div>
              <div class="text-sm text-[#333333] mt-2">原价：¥1056/年</div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-none w-[270px]">右边</div>
    </div>
  </el-dialog>
</template>
<script setup lang="ts">
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const target = 17
function twoSum(nums, target) {}
</script>

<style></style>
