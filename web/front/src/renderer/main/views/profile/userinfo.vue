<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useUserStore } from '@/stores/modules/user'

import CropperDialog from '@/components/CropperDialog/index.vue'

const userStore = useUserStore()

const corpperRef = ref()

const profileVisible = ref(false)

const profileForm = reactive({
  nickname: '',
  avatar: ''
})

const handleEdit = () => {
  profileForm.avatar = userStore.info.avatar
  profileForm.nickname = userStore.info.nickname

  profileVisible.value = true
}

const handleChangeAvatar = () => {
  corpperRef.value.uploadFile()
}
const handleSuccessCropper = (data) => {
  profileForm.avatar = data.url
}

const handleSaveProfile = () => {
  return userStore.update(profileForm).then(() => {
    profileVisible.value = false
    ElMessage.success($t('status.updated'))
  })
}
</script>

<template>
  <h3 class="text-2xl text-primary font-medium">{{ $t('profile.profile') }}</h3>
  <div class="flex items-center gap-5 mt-5">
    <el-avatar :size="80" :src="userStore.info.avatar" style="--el-avatar-bg-color: transparent"></el-avatar>
    <div class="flex-1">
      <div class="text-2xl text-primary font-medium">{{ userStore.info.nickname }}</div>
      <p class="text-sm text-secondary mt-2">{{ userStore.info.mobile || '- -' }}</p>
    </div>
    <el-button type="info" plain class="border-none text-primary" @click="handleEdit">
      {{ $t('action.edit') }}
    </el-button>
  </div>
  <h3 class="text-2xl text-primary font-medium mt-10">{{ $t('profile.bind_accounts') }}</h3>
  <div class="flex flex-col gap-4 mt-5">
    <div class="h-9 flex items-center gap-2.5">
      <img class="size-6" :src="$getPublicPath('/images/profile/mobile.png')" alt="" />
      <div class="flex-none w-[100px] text-base text-primary">
        {{ $t('profile.bind_mobile') }}
      </div>
      <div class="flex-1 text-sm text-placeholder">
        {{ userStore.info.mobile || $t('profile.unbind_account') }}
      </div>
      <el-button type="info" class="border-none text-placeholder-important" plain disabled>{{ $t('profile.bind')
        }}</el-button>
    </div>
    <div class="h-9 flex items-center gap-2.5">
      <img class="size-6" :src="$getPublicPath('/images/profile/email.png')" alt="" />
      <div class="flex-none w-[100px] text-base text-primary">{{ $t('profile.bind_email') }}</div>
      <div class="flex-1 text-sm text-placeholder">
        {{ userStore.info.email || $t('profile.unbind_account') }}
      </div>
      <el-button type="info" class="border-none text-placeholder-important" plain disabled>{{ $t('profile.bind')
        }}</el-button>
    </div>
    <div class="h-9 flex items-center gap-2.5">
      <img class="size-6" :src="$getPublicPath('/images/profile/wechat.png')" alt="" />
      <div class="flex-none w-[100px] text-base text-primary">
        {{ $t('profile.bind_wechat') }}
      </div>
      <div class="flex-1 text-sm text-placeholder">
        {{ userStore.info.wechatid || $t('profile.unbind_account') }}
      </div>
      <el-button type="info" class="border-none text-placeholder-important" plain disabled>{{ $t('profile.bind')
        }}</el-button>
    </div>
    <div class="h-9 flex items-center gap-2.5">
      <img class="size-6" :src="$getPublicPath('/images/profile/google.png')" alt="" />
      <div class="flex-none w-[100px] text-base text-primary">
        {{ $t('profile.bind_google') }}
      </div>
      <div class="flex-1 text-sm text-placeholder">
        {{ userStore.info.wechatid || $t('profile.unbind') }}
      </div>
      <el-button type="info" class="border-none text-placeholder-important" plain disabled>{{
        $t('profile.unbind')
        }}</el-button>
    </div>
  </div>
  <h3 class="text-2xl text-primary font-medium mt-10">{{ $t('profile.logined_devices') }}</h3>
  <div class="flex flex-col gap-4 mt-5">
    <div class="h-[110px] px-6 rounded-lg flex items-center bg-[#F8F8F9]">
      <div class="flex-1">
        <div class="text-base text-primary flex items-center gap-2">
          <svg-icon name="network"></svg-icon>
          WindowsChrome 网页版
        </div>
        <div class="text-sm text-secondary ml-6 mt-1">2025年3月22日上午10点51分</div>
      </div>
      <div class="text-sm text-regular">{{ $t('profile.used_devices') }}</div>
    </div>
  </div>

  <el-dialog v-model="profileVisible" :title="$t('profile.profile')" width="550">
    <div class="flex items-center">
      <div class="w-[73px] text-[#182B50] text-opacity-80">{{ $t('form.avatar') }}</div>
      <div class="relative rounded-full w-[60px] h-[60px] overflow-hidden cursor-pointer" @click="handleChangeAvatar">
        <el-avatar style="--el-avatar-size: 60px" :src="profileForm.avatar" />
        <div
          class="absolute bottom-0 left-0 right-0 h-5 flex justify-center items-center bg-[#000000] bg-opacity-60 text-white text-opacity-80 text-xs">
          {{ $t('form.change') }}
        </div>
      </div>
    </div>
    <div class="flex items-center mt-6">
      <div class="w-[73px] text-[#182B50] text-opacity-80">{{ $t('form.nickname') }}</div>
      <el-input v-model="profileForm.nickname" v-trim size="large" class="flex-1" maxlength="15" show-word-limit />
    </div>
    <template #footer>
      <el-button size="large" @click="profileVisible = false">
        {{ $t('action.cancel') }}
      </el-button>
      <el-button size="large" type="primary" v-debounce :disabled="!profileForm.nickname.trim()"
        @click="handleSaveProfile">
        {{ $t('action.confirm') }}
      </el-button>
    </template>
    <CropperDialog ref="corpperRef" :upload-avatar="true" :limit-size="2" @confirm="handleSuccessCropper" />
  </el-dialog>
</template>

<style scoped></style>
