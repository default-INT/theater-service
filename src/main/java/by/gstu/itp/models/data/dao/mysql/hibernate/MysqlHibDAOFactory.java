package by.gstu.itp.models.data.dao.mysql.hibernate;

import by.gstu.itp.models.data.dao.*;

public class MysqlHibDAOFactory extends DAOFactory {
    @Override
    public AuthorDAO getAuthorDAO() {
        return new MysqlHibAuthorDAO();
    }

    @Override
    public DateDAO getDateDAO() {
        return new MysqlHibDateDAO();
    }

    @Override
    public GenreDAO getGenreDAO() {
        return new MysqlHibGenreDAO();
    }

    @Override
    public PlayDAO getPlayDAO() {
        return new MysqlHibPlayDAO();
    }

    @Override
    public UserDAO getUserDAO() {
        return new MysqlHibUserDAO();
    }
}
