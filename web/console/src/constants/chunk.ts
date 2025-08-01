export const CHUNK_SETTING_DEFAULT = {
  id: 0,
  eid: 0,
  library_id: null,
  min_chunk_size: 1000,
  knowledge_split_rule: 'h2',
  knowledge_max_length: 2000,
  knowledge_overlap_size: 100,
  index_split_rule: 'paragraph',
  index_max_length: 2000,
  index_overlap_size: 100,
  summary_generation: 'manual',
  question_generation: 'manual',
  logic_channel_id: null,
  logic_model_name: null,
  embedding_channel_id: null,
  embedding_model_name: null,
  search_config: {
    vector: true,
    fulltext: false,
    hybrid: false,
    top_k: 4,
    score_threshold: 0,
  },
}

export const SUMMARY_GENERATION = {
  MANUAL: 'manual',
  AI: 'ai',
}

export const QUESTION_GENERATION = {
  MANUAL: 'manual',
  AI: 'ai',
}

export const SPLIT_TYPE = {
  HEADING: 'heading',
  PARAGRAPH: 'paragraph',
  CUSTOM: 'custom',
}
