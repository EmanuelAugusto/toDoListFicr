module.exports = (sequelize, DataTypes) => {
    const Tarefa = sequelize.define('Tarefa', {
        titulo: DataTypes.STRING,
        descricao: DataTypes.STRING,
        status: DataTypes.STRING,
    });

    return Tarefa;
}