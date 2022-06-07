import Sequelize from "sequelize"

const sequelize = new Sequelize(
    "postgres://yilnflmu:Il4hC6p_JSngN00s1q7yt4mQwAhfc17s@queenie.db.elephantsql.com/yilnflmu",
    {
        dialect: "postgres",
        define:{
            timestamps: false
        }
    }
)

export default sequelize