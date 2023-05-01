import { memo, useEffect } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './UsersPage.module.scss';
import { Header } from '@/widgets/Header';
import { UsersPageHeader } from '../UsersPageHeader/UsersPageHeader';
import { UsersList } from '@/entities/User';
import { Button, ButtonVariant } from '@/shared/ui/Button/Button';
import Vector from '@/shared/assets/vector.svg'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchUsers } from '../../model/services/fetchUsers/fetchUsers';
import { useSelector } from 'react-redux';
import { getUsers } from '../../model/slices/usersPageSlice';
import { getUsersPageIsLoading } from '../../model/selectors/usersPageSelectors';

interface UsersPageProps {
    className?: string;
}

// const usersObj = JSON.parse(`{"users": [{"id":1,"email":"admin@mail.local","firstName":"Иван","lastName":"Петров","avatar":"https://source.unsplash.com/100x100/?Avatar","role":"Владелец продукта","bio":"<p>Иван Петров - 30-летний статист, который любит работать с автомобилями, играть в шахматы и экстремально гладить. Он веселый и творческий, но также может быть очень грубым и немного сварливым.</p><p>Он пристрастился к покупкам, на что указала его подруга Лекси Киан Уильямс, когда ему было 16 лет. Проблема обострилась в 2012 году. Иван потерял две работы из-за своей зависимости, а именно: уборщиком в студии и помощником продавца.</p><p>Физически Иван в хорошей форме. Он высокий, с оливковой кожей, каштановыми волосами и голубыми глазами.</p><p>Он вырос в рабочем районе. Никогда по-настоящему не зная своих родителей, он вырос в нескольких приемных семьях.</p><p>"},{"id":2,"email":"a.korolev@mail.local","firstName":"Артур","lastName":"Королёв","avatar":"https://source.unsplash.com/101x101/?Avatar","role":"Партнер","bio":"<p>Клиенты видят в нем эксперта по вопросам разработки комплексных решений финансовых продуктов, включая такие аспекты, как организационная структура, процессы, аналитика и ИТ-компоненты. Он помогает клиентам лучше понимать структуру рисков их бизнеса, улучшать процессы за счет применения новейших технологий и увеличивать продажи, используя самые современные аналитические инструменты. </p><p>В работе с клиентами недостаточно просто решить конкретную проблему или помочь справиться с трудностями. Не менее важно уделять внимание обмену знаниями: 'Один из самых позитивных моментов — это осознание того, что ты помог клиенту перейти на совершенно новый уровень компетентности, уверенность в том, что после окончания проекта у клиента есть все необходимое, чтобы дальше развиваться самостоятельно'. </p><p>Помимо разнообразных проектов для клиентов финансового сектора, Сорин ведет активную предпринимательскую деятельность. Он является совладельцем сети клиник эстетической медицины в Швейцарии, предлагающей инновационный подход к красоте, а также инвестором других бизнес-проектов.</p><p>"},{"id":3,"email":"p.sidorov@example.local","firstName":"Пётр","lastName":"Сидоров","avatar":"https://source.unsplash.com/102x102/?Avatar","role":"Разработчик","bio":"<p>"},{"id":4,"email":"a.smirnov@mail.local","firstName":"Андрей","lastName":"Смирнов","avatar":"https://source.unsplash.com/103x103/?Avatar","role":"Архитектор","bio":"<p>"},{"id":5,"email":"s.antipov@example.local","firstName":"Сергей","lastName":"Антипов","avatar":"https://source.unsplash.com/104x104/?Avatar","role":"QA","bio":"<p>"},{"id":6,"email":"p.blinov@example.local","firstName":"Прохор","lastName":"Блинов","avatar":"https://source.unsplash.com/105x105/?Avatar","role":"Бизнес аналитик","bio":"<p>"},{"id":7,"email":"v.salatova@mail.local","firstName":"Вера","lastName":"Салатова","avatar":"https://source.unsplash.com/106x106/?Avatar","role":"Разработчик","bio":"<p>"},{"id":8,"email":"n.larina@example.local","firstName":"Надежда","lastName":"Ларина","avatar":"https://source.unsplash.com/107x107/?Avatar","role":"Разработчик","bio":"<p>"}]}`)
// console.log("🚀 ~ file: UsersPage.tsx:12 ~ users:", usersObj.users)

export const UsersPage = memo((props: UsersPageProps) => {
    const { className } = props;

    const dispatch = useAppDispatch();

    const users = useSelector(getUsers.selectAll);
    console.log("🚀 ~ file: UsersPage.tsx:28 ~ UsersPage ~ users:", users)
    const isLoading = useSelector(getUsersPageIsLoading);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <div className={classNames(cls.UsersPage, {}, [className])}>
            <Header mainContentSlot={<UsersPageHeader />} />
            <main className={cls.main}>
                <UsersList isLoading={isLoading} users={users} />
            </main>
            <div className={cls.more}>
                <Button className={cls.logoutBtn} variant={ButtonVariant.OUTLINE}>Показать еще <Vector /></Button>
            </div>
        </div>
    );
});
