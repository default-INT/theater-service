package by.gstu.itp.models.data.dao.mysql.hibernate;

import by.gstu.itp.models.beans.Play;
import by.gstu.itp.models.data.dao.PlayDAO;

import java.util.stream.Stream;

class MysqlHibPlayDAO implements PlayDAO {
    @Override
    public Stream<Play> readAll() {
        return HibernateSession.getSessionFactory()
                .openSession()
                .createQuery("FROM Play ", Play.class)
                .stream();
    }

    @Override
    public void add(Play play) {
        HibernateSession.commitHibTransaction(play);
    }

    @Override
    public void update(Play play) {
        HibernateSession.commitHibTransaction(play);
    }
}
