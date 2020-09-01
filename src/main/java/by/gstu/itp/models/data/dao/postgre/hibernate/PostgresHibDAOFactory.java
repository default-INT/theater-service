package by.gstu.itp.models.data.dao.postgre.hibernate;

import by.gstu.itp.models.data.dao.*;

public class PostgresHibDAOFactory extends DAOFactory {
    @Override
    public AuthorDAO getAuthorDAO() {
        return new PostgresHibAuthorDAO();
    }

    @Override
    public DateDAO getDateDAO() {
        return new PostgresHibDateDAO();
    }

    @Override
    public GenreDAO getGenreDAO() {
        return new PostgresHibGenreDAO();
    }

    @Override
    public PlayDAO getPlayDAO() {
        return new PostgresHibPlayDAO();
    }

    @Override
    public PostgresHibUserDAO getUserDAO() {
        return new PostgresHibUserDAO();
    }
}
