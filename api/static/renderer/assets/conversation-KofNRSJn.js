import { C as service, F as handleError, p as defineStore, S as getSimpleDateFormatString } from "./main-zTjO05wq.js";
const conversation = {
  list() {
    return service.get(`/api/conversations`).catch(handleError);
  },
  create(data) {
    return service.post(`/api/conversations`, data).catch(handleError);
  },
  edit(id, data) {
    return service.put(`/api/conversations/${id}`, data).catch(handleError);
  },
  del(id) {
    return service.delete(`/api/conversations/${id}`).catch(handleError);
  },
  messasges(id, params = {}) {
    return service.get(`/api/conversations/${id}/messages`, { params }).catch(handleError);
  }
};
const setRouterQuery = (data = {}, hashVal = "") => {
  const currentUrl = window.location.href;
  const [baseUrl, hash] = currentUrl.split("#");
  const hashParts = hash ? hash.split("?") : [""];
  const hashPath = hashVal || hashParts[0];
  const queryString = hashParts[1] || "";
  const queryParams = new URLSearchParams(queryString);
  Object.entries(data).forEach(([key, value]) => {
    if (value !== void 0 && value !== null) {
      queryParams.set(key, String(value));
    } else {
      queryParams.delete(key);
    }
  });
  const newQueryString = queryParams.toString();
  const newHash = hashPath + (newQueryString ? `?${newQueryString}` : "");
  window.location.hash = newHash;
};
const USUAL_AGENTS_KEY = "usual_agents";
const getLocalStorage = (key, defaultValue) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (e) {
    console.error(`Error reading localStorage key "${key}":`, e);
    return defaultValue;
  }
};
const useConversationStore = defineStore("conversation-store", {
  state: () => ({
    conversations: [],
    agents: [],
    usual_agents: getLocalStorage(USUAL_AGENTS_KEY, []),
    current_agentid: 0,
    current_conversationid: 0
  }),
  getters: {
    currentAgent: (state) => {
      return state.usual_agents.find((item) => item.agent_id === state.current_agentid) || { name: "", logo: "", agent_id: 0, configs: "{}" };
    },
    currentConversation: (state) => {
      return state.conversations.find((item) => item.conversation_id === state.current_conversationid) || {
        conversation_id: 0,
        title: "",
        create_time: 0,
        update_time: 0,
        top: 0,
        is_valid: 0,
        virtual_id: Date.now().toString()
      };
    }
  },
  actions: {
    async loadConversations() {
      try {
        const res = await conversation.list();
        this.conversations = res.data.conversations.map((item) => {
          item.created_at = getSimpleDateFormatString({ date: item.created_time, format: "YYYY.MM.DD hh:mm" });
          item.updated_at = getSimpleDateFormatString({ date: item.updated_time, format: "YYYY.MM.DD hh:mm" });
          return item;
        });
        return this.conversations;
      } catch (error) {
        console.error("Failed to load conversations:", error);
        throw error;
      }
    },
    saveUsualAgents() {
      try {
        localStorage.setItem(USUAL_AGENTS_KEY, JSON.stringify(this.usual_agents));
      } catch (error) {
        console.error("Failed to save usual agents:", error);
      }
    },
    async pushUsualAgent(agent) {
      const index = this.usual_agents.findIndex((item) => item.agent_id === agent.agent_id);
      const newAgent = {
        ...agent,
        is_fixed: index > -1 ? this.usual_agents[index].is_fixed : false
      };
      const fixedAgents = this.usual_agents.filter((item) => item.is_fixed && item.agent_id !== agent.agent_id);
      const unfixedAgents = this.usual_agents.filter((item) => !item.is_fixed && item.agent_id !== agent.agent_id);
      if (newAgent.is_fixed) {
        this.usual_agents = [newAgent, ...fixedAgents, ...unfixedAgents];
      } else {
        this.usual_agents = [...fixedAgents, newAgent, ...unfixedAgents];
      }
      this.saveUsualAgents();
    },
    toggleUsualAgentFixed(agent) {
      const targetAgent = this.usual_agents.find((item) => item.agent_id === agent.agent_id);
      if (targetAgent) {
        targetAgent.is_fixed = !targetAgent.is_fixed;
        const fixedAgents = this.usual_agents.filter((item) => item.is_fixed && item.agent_id !== agent.agent_id);
        const unfixedAgents = this.usual_agents.filter((item) => !item.is_fixed && item.agent_id !== agent.agent_id);
        this.usual_agents = targetAgent.is_fixed ? [targetAgent, ...fixedAgents, ...unfixedAgents] : [...fixedAgents, targetAgent, ...unfixedAgents];
        this.saveUsualAgents();
      }
    },
    updateUsualAgents(agent) {
      this.usual_agents = this.usual_agents.map(
        (item) => item.agent_id === agent.agent_id ? { ...item, ...agent } : item
      );
      this.saveUsualAgents();
    },
    deleteUsualAgent(agent) {
      this.usual_agents = this.usual_agents.filter((item) => item.agent_id !== agent.agent_id);
      this.saveUsualAgents();
    },
    createConversation(agent_id, title = "") {
      return conversation.create({
        agent_id,
        title
      }).then((res) => res.data);
    },
    addConversation(conversation2) {
      conversation2.created_at = getSimpleDateFormatString({ date: conversation2.created_time, format: "YYYY.MM.DD hh:mm" });
      conversation2.updated_at = getSimpleDateFormatString({ date: conversation2.updated_time, format: "YYYY.MM.DD hh:mm" });
      this.conversations.unshift(conversation2);
    },
    updateConversation(conversation2) {
      this.conversations = this.conversations.map(
        (item) => item.conversation_id === conversation2.conversation_id ? { ...item, ...conversation2 } : item
      );
    },
    async editConversation(conversation$1) {
      const data = { title: conversation$1.title };
      await conversation.edit(conversation$1.conversation_id, data);
      this.updateConversation(conversation$1);
    },
    async delConversation(conversation$1) {
      this.conversations = this.conversations.filter((item) => item.conversation_id !== conversation$1.conversation_id);
      await conversation.del(conversation$1.conversation_id);
      if (this.current_conversationid === conversation$1.conversation_id) {
        this.setCurrentState(this.current_agentid, 0);
      }
    },
    updateAgents(agents) {
      this.agents = agents;
      this.usual_agents = this.usual_agents.filter(
        (usualAgent) => agents.some((agent) => agent.agent_id === usualAgent.agent_id)
      );
      this.saveUsualAgents();
    },
    setCurrentState(agent_id, conversation_id) {
      if (agent_id) {
        const agent = this.agents.find((item) => item.agent_id === agent_id);
        if (!agent) {
          agent_id = this.agents[0]?.agent_id || 0;
        }
      }
      if (conversation_id) {
        const conversation2 = this.conversations.find((item) => item.conversation_id === conversation_id);
        if (!conversation2) {
          conversation_id = 0;
        }
      }
      this.current_agentid = agent_id;
      this.current_conversationid = conversation_id;
      this.setRouter({ agent_id: agent_id || null, conversation_id: conversation_id || null });
    },
    clearCurrentState() {
      this.current_agentid = 0;
      this.current_conversationid = 0;
    },
    setRouter(data = {}) {
      setRouterQuery(data, "/chat");
    }
  }
});
export {
  conversation as c,
  useConversationStore as u
};
