import supabase from "./supabase";

export const DB = {
    async readAll(table) {
        const {data, error} = await supabase.from(table).select()
        if (error) throw new Error(error.message)
        return data
    },
    async readOne(table, id) {
        const {data, error} = await supabase.from(table).select().eq("id", id)
        if (error) throw new Error(error.message)
        return data        
    },
    async readMany(table, ids) {
        const {data, error} = await supabase.from(table).select().in("id", ids)
        if (error) throw new Error(error.message)
        return data  
    },
    async createOne(table, item) {
        const { error } = await supabase.from(table).insert([item])
        if (error) throw new Error(error.message)
      },
      async deleteOne(table, id) {
        const { error } = await supabase.from(table).delete().eq("id", id)
        if (error) throw new Error(error.message)
      },
      async editOne(table, values, id) {
        const { error } = await supabase.from(table).update(values).eq("id", id)
        if (error) throw new Error(error.message)
      }
}