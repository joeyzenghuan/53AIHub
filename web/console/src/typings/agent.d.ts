import type { ChannelConfig } from './channel'

declare namespace Agent {
	interface UseCase {
		type: 'case' | 'scene';
		id: string;
		input_text?: string;
		output_text?: string;
		image?: string;
		scene?: string;
		desc?: string;
	}

	interface CompletionParams {
		temperature: number;
		top_p: number;
		presence_penalty: number;
		frequency_penalty: number;
	}

	interface CustomConfig {
		agent_type: string;
		coze_workspace_id: string;
		coze_bot_id: string;
		app_builder_bot_id: string;
		file_parse: {
			enable: boolean;
		};
		image_parse: {
			enable: boolean;
		};
	}

	interface State {
		agent_id: number;
		eid: number;
		name: string;
		logo: string;
		sort: number;
		description: string;
		channel_type: number;
		model: string;
		prompt: string;
		configs: string;  // 或者可以使用 CompletionParams 类型
		tools: string;    // 可以根据实际内容定义具体的工具类型
		group_id: number;
		use_cases: string;  // 或者可以使用 UseCase[] 类型
		created_by: number;
		custom_config: string;  // 或者可以使用 CustomConfig 类型
		user_group_ids: number[];
		user_group_names: string[];
		enable: boolean;
		created_time: number;
		updated_time: number;
	}

	interface FormData  {
		logo: string
		name: string
		group_id: number
		description: string
		channel_type: number
		model: string
		sort: number
		prompt: string
		user_group_ids: number[]
		subscription_group_ids: number[]
		tools: any[]
		use_cases: any[]
		configs: Record<string, any>
		enable: boolean
		custom_config: {
			agent_type: string
			coze_workspace_id: string
			coze_bot_id: string
			app_builder_bot_id: string
			chat53ai_agent_id: string
		}
	}
}

export interface AgentData {
	channel_config?: ChannelConfig
	custom_config?: {
		channel_config?: ChannelConfig
	}
	model?: string
	subscription_group_ids?: number[]
	user_group_ids?: number[]
}
