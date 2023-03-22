import axios from "axios";
export const QuestsService = {
  async getAll() {
    const response = await axios.get("http://localhost:3004/quests");
    return response.data;
  },
  async getById(id) {
    const response = await axios.get(`http://localhost:3004/quests/${id}`);
    return response.data;
  },
  async getAnswersById(id) {
    const response = await axios.get(
      `http://localhost:3004/quests/${id}/answers`
    );
    return response.data;
  },
};
