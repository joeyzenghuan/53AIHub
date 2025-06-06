<template>
  <div
    v-if="!globalStore.siderVisible && !globalStore.siderCollapsed"
    class="w-4 h-full absolute left-0 top-0 z-[2] hover:bg-gray-100/50 transition-colors"
    @mouseenter="globalStore.hoverSider(true)"
  />

  <div
    ref="siderRef"
    class="w-[280px] border-r flex flex-col bg-[#FAFAFA] transition-all duration-300 ease-linear"
    :class="[
      {
        'absolute z-10 left-0 top-20 bottom-5 -translate-x-full shadow-xl rounded-r':
          !globalStore.siderVisible,
        'translate-x-0': !globalStore.siderVisible && globalStore.siderCollapsed
      }
    ]"
    @mouseleave="globalStore.hoverSider(false)"
  >
    <div class="px-3 h-[70px] flex items-center gap-2">
      <router-link :to="{ name: 'Home' }">
        <img class="size-8 rounded" :src="enterpriseStore.logo" alt="" />
      </router-link>
      <router-link :to="{ name: 'Home' }" class="flex-1 text-base text-primary truncate">{{
        enterpriseStore.display_name
      }}</router-link>

      <div
        v-tooltip="{
          content: globalStore.siderVisible
            ? $t('chat.collapse_side_bar')
            : $t('chat.expand_side_bar')
        }"
        class="flex-none size-7 rounded-md flex-center cursor-pointer hover:bg-[#ECEDEE]"
        @click="globalStore.toggleSider"
      >
        <svg-icon name="layout-left" size="20" color="#9A9A9A"></svg-icon>
      </div>
    </div>
    <div class="border-b mx-2"></div>
    <div class="flex-1 py-3 overflow-y-auto">
      <div class="px-5 pb-2">
      <el-input
        v-model="state.keyword"
        class=""
        :placeholder="$t('action.search')"
        :prefix-icon="Search"
        style="--el-input-inner-height: 36px; --el-input-border-color:none;"
        clearable
      ></el-input>
      </div>
      <div class="px-5" v-if="state.keyword">
        <template v-if="searchUsualAgents.length">
          <div class="h-9 flex items-center gap-2">
            <div class="text-sm text-[#939499]">
              {{ $t('module.chat') }}
            </div>
            <div class="flex-1 h-px bg-[#E6E8EB]"></div>
          </div>

          <div class="flex flex-col gap-1">
            <template v-for="item in searchUsualAgents" :key="item.agent_id">
              <div class="h-9 px-6 flex items-center gap-2 rounded cursor-pointer text-[#4F5052] hover:bg-[#ECEDEE]" @click="convStore.setCurrentState(item.agent_id, 0)">
                <el-image class="flex-none size-6 rounded-full" :src="item.logo"></el-image>
                <div class="flex-1 text-sm truncate" v-html="item.formt_name"></div>
              </div>
            </template>
          </div>
        </template>

        <template v-if="searchAgents.length">
          <div class="h-9 flex items-center gap-2">
            <div class="text-sm text-[#939499]">
              {{ $t('module.find') }}
            </div>
            <div class="flex-1 h-px bg-[#E6E8EB]"></div>
          </div>

          <div class="flex flex-col gap-1">
            <template v-for="item in searchAgents" :key="item.agent_id">
              <div class="h-9 px-6 flex items-center gap-2 rounded cursor-pointer text-[#4F5052] hover:bg-[#ECEDEE]" @click="() => {convStore.pushUsualAgent(item),convStore.setCurrentState(item.agent_id, 0)}">
                <el-image class="flex-none size-6 rounded-full" :src="item.logo"></el-image>
                <div class="flex-1 text-sm truncate" v-html="item.formt_name"></div>
              </div>
            </template>
          </div>
        </template>
        <template v-if="searchToolBox.length">
          <div class="h-9 flex items-center gap-2">
            <div class="text-sm text-[#939499]">
              {{ $t('module.toolbox') }}
            </div>
            <div class="flex-1 h-px bg-[#E6E8EB]"></div>
          </div>

          <div class="flex flex-col gap-1">
            <template v-for="item in searchToolBox" :key="item.agent_id">
              <a :href="item.url" target="_blank" class="h-9 px-6 flex items-center gap-2 rounded cursor-pointer text-[#4F5052] hover:bg-[#ECEDEE]">
                <el-image class="flex-none size-6 rounded-full" :src="item.logo"></el-image>
                <div class="flex-1 text-sm truncate" v-html="item.name"></div>
              </a>
            </template>
          </div>
        </template>

        <el-empty v-if="!searchUsualAgents.length && !searchAgents.length && !searchToolBox.length" image-size="60" :description="$t('common.no_data')"></el-empty>
      </div>

      <div v-show="!state.keyword">
        <div class="px-2">
          <div
            class="h-9 px-2 rounded-md flex items-center gap-0.5 cursor-pointer hover-bg-primary-light-9 text-primary"
            @click="state.showUsualAgents = !state.showUsualAgents"
          >
            <div class="size-7 flex-center">
              <svg-icon size="18" name="chat"></svg-icon>
            </div>
            <p class="flex-1 text-base">{{ $t('module.chat') }}</p>

            <el-icon>
              <ArrowUp v-if="state.showUsualAgents" />
              <ArrowDown v-else />
            </el-icon>
          </div>
        </div>
        <div class="px-3" v-show="state.showUsualAgents">
          <transition-group name="list" tag="div" class="flex flex-col gap-1 mt-2">
            <template v-for="item in usualAgents" :key="item.agent_id">
              <div
                class="h-9 pl-6 pr-2 rounded-md flex items-center gap-2 cursor-pointer hover:bg-[#ECEDEE] group text-[#4F5052]"
                :class="[
                  currentAgent.agent_id === item.agent_id && !currentConv.conversation_id
                    ? 'bg-[#ECEDEE] '
                    : ''
                ]"
                @click="convStore.setCurrentState(item.agent_id, 0)"
              >
                <el-image class="flex-none size-6 rounded" :src="item.logo"></el-image>
                <div class="flex-1 text-sm truncate" v-tooltip="true">
                  {{ item.name }}
                </div>

                <div
                  v-tooltip="{ content: item.is_fixed ? $t('action.unfixed') : $t('action.fixed') }"
                  class="size-7 flex-center"
                  v-show="!state.sidebarCollapsed"
                  @click.stop="convStore.toggleUsualAgentFixed(item)"
                >
                  <svg-icon v-if="item.is_fixed" name="top" color="#2563EB"></svg-icon>
                  <svg-icon
                    v-else
                    name="top"
                    color="#4F5052"
                    class="invisible group-hover:visible"
                  ></svg-icon>
                </div>
              </div>
            </template>
          </transition-group>
          <div
            v-if="convStore.usual_agents.length > SHOW_USUAL_AGENT_LEN"
            class="flex items-center gap-1 mt-3.5 cursor-pointer text-[#9A9A9A]"
            @click="toggleAgent"
          >
            <span class="text-sm" v-show="!state.sidebarCollapsed">{{
              state.agentCollapsed ? $t('action.collapse') : $t('action.expand')
            }}</span>
            <el-icon>
              <ArrowUp v-if="state.agentCollapsed" />
              <ArrowDown v-else />
            </el-icon>
          </div>
        </div>
        <div class="flex flex-col gap-3 px-2 mt-2">
          <router-link
            :to="{ name: 'Discover' }"
            class="h-9 px-2 rounded-md flex items-center gap-0.5 cursor-pointer text-[#4F5052] hover:bg-[#ECEDEE]"
            :class="[route.name === 'Discover' ? 'bg-[#ECEDEE]' : '']"
          >
            <div class="size-7 flex-center">
              <svg-icon size="18" name="compass"></svg-icon>
            </div>
            <p class="flex-1 text-base text-[#000000]">{{ $t('module.find') }}</p>
          </router-link>
        </div>

        <div class="mx-2 border-t mt-1.5"></div>
        <div class="flex flex-col gap-3 px-2 py-1.5">
          <router-link
            :to="{ name: 'Toolbox' }"
            class="h-9 px-2 rounded-md flex items-center gap-0.5 cursor-pointer text-primary hover:bg-[#ECEDEE]"
            :class="[route.name === 'Toolbox' ? 'bg-[#ECEDEE]' : '']"
          >
            <div class="size-7 flex-center">
              <svg-icon size="18" name="send_plane"></svg-icon>
            </div>
            <p class="flex-1 text-base">{{ $t('module.toolbox') }}</p>
          </router-link>
          <div
            @click="handleJumpToLibrary"
            href="http://ziroom.hub.53ai.com/space"
            v-if="$isElectron"
            target="_blank"
            class="h-9 px-2 rounded-md flex items-center gap-0.5 cursor-pointer text-[#4F5052] hover:bg-[#ECEDEE]"
          >
            <div class="size-7 flex-center">
              <svg-icon size="18" name="tips"></svg-icon>
            </div>
            <p class="flex-1 text-base text-[#000000]">{{ $t('module.library') }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted, onUnmounted, computed, ref, nextTick } from 'vue'
import { ArrowUp, ArrowDown, Search } from '@element-plus/icons-vue'
import { useRoute } from 'vue-router'
import { onClickOutside } from '@vueuse/core'


import { useAgentStore } from '@/stores/modules/agent'
import { useGlobalStore } from '@/stores/modules/global'
import { useConversationStore } from '@/stores/modules/conversation'
import { useEnterpriseStore } from '@/stores/modules/enterprise'
import { useLinksStore } from '@/stores/modules/links'


const route = useRoute()

const agentStore = useAgentStore()
const globalStore = useGlobalStore()
const linksStore = useLinksStore()
const convStore = useConversationStore()
const enterpriseStore = useEnterpriseStore()

const SHOW_USUAL_AGENT_LEN = 4

const siderRef = ref()

const state = reactive({
  keyword: '',
  sidebarCollapsed: false,
  agentCollapsed: false,
  showUsualAgents: true
})

const usualAgents = computed(() => {
  const agents = state.agentCollapsed
    ? convStore.usual_agents
    : convStore.usual_agents.slice(0, SHOW_USUAL_AGENT_LEN)
  return agents
})
const currentAgent = computed(() => convStore.currentAgent)
const currentConv = computed(() => convStore.currentConversation)
const searchUsualAgents = computed(() => {
  if (!state.keyword) return []
  return convStore.usual_agents.filter((agent) => agent.name.toLowerCase().includes(state.keyword.toLowerCase())).map((item) => {
    return {
      ...item,
      formt_name: item.name.replace(new RegExp(state.keyword, 'g'), `<span class="text-theme">${state.keyword}</span>`)
    }
  })
})
const searchAgents = computed(() => {
  if (!state.keyword) return []
  return agentStore.agentList.filter((agent) => agent.name.toLowerCase().includes(state.keyword.toLowerCase())).map((item) => {
    return {
      ...item,
      formt_name: item.name.replace(new RegExp(state.keyword, 'g'), `<span class="text-theme">${state.keyword}</span>`)
    }
  })
})
const searchToolBox = computed(() => {
  if (!state.keyword) return []
  return Object.values(linksStore.appMap).flat().filter((item) => item.name.toLowerCase().includes(state.keyword.toLowerCase())).map((item) => {
    return {
      ...item,
      name: item.name.replace(new RegExp(state.keyword, 'g'), `<span class="text-theme">${state.keyword}</span>`)
    }
  })
})
// 点击外部区域关闭侧边栏
onClickOutside(siderRef, () => {
  if (!globalStore.siderVisible && globalStore.siderCollapsed) globalStore.siderCollapsed = false
})

const toggleAgent = () => {
  state.agentCollapsed = !state.agentCollapsed
}

const handleJumpToLibrary = () => {
  if (window.$isElectron) {
    window.$chat53ai.$win({
      type: 'new-tab',
      data: JSON.stringify({
        title: 'AI知识库',
        closable: true,
        ability: false,
        urls: ['http://ziroom.hub.53ai.com/space']
      })
    })
  } else {
    window.open('http://ziroom.hub.53ai.com/space', '_blank')
  }
}

onMounted(async () => {
  const agent_id = route.query.agent_id || ''
  const conversation_id = route.query.conversation_id || ''
  agentStore.loadCategorys()
  await agentStore.loadAgentList().then((agentList) => {
    if (route.name !== 'Chat') return

    const agent = agentList.find((item) => item.agent_id === +agent_id)
    if (agent) {
      convStore.pushUsualAgent(agent)
    } else {
      const usableAgent = convStore.usual_agents[0] || agentList[0]
      if (usableAgent) {
        convStore.pushUsualAgent(usableAgent)
      }
    }
    convStore.updateAgents(agentList)
    if (!conversation_id) {
      convStore.setCurrentState(+agent_id, 0)
    }
  })
  nextTick(() => {
    linksStore.loadLinks()
  })
})

onUnmounted(() => {
  // 清理逻辑
  convStore.clearCurrentState()
})
</script>

<style scoped>
.sidebar-transition {
  transition: width 0.3s ease-in-out;
}

.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
