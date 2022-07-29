import { v4 } from 'uuid';
import Avatar from '~/components/Avatar';
import Button from '~/components/Button';
import {
    CalendarIcon,
    EmailIcon,
    LockIcon,
    PencilIcon,
    UserSolidIcon,
    UsersSolidIcon,
} from '~/components/Icons';
import PersonalInformationItem from '~/components/PersonalInformationItem';
import config from '~/config';
import useAuth from '~/context/Auth';
import { useBackToTop } from '~/hooks';

const personalInformation = [
    {
        title: 'Full name',
        icon: UserSolidIcon,
        attribute: 'name',
    },
    {
        title: 'E-mail',
        icon: EmailIcon,
        attribute: 'email',
    },
    {
        title: 'Birthday',
        icon: CalendarIcon,
        attribute: 'birthday',
    },
    {
        title: 'Gender',
        icon: UsersSolidIcon,
        attribute: 'gender',
    },
    {
        title: 'Password',
        icon: LockIcon,
        attribute: 'password',
    },
];

const PersonalInformation = () => {
    const { user } = useAuth();

    useBackToTop();

    return (
        <div className="relative p-[10px] pt-[35px]">
            <Button
                to={config.routes.personalInformationEdit}
                primary
                large
                className="!absolute right-0"
            >
                <PencilIcon className="w-5 h-5"></PencilIcon>
                Edit information
            </Button>
            <div>
                <Avatar
                    className="w-[100px] h-[100px] mx-auto"
                    src={user?.avatar?.url ?? user?.photoURL}
                    alt=""
                ></Avatar>
                <h1 className="mt-4 font-bold text-[26px] text-center leading-[1.2]">
                    {user?.displayName}
                </h1>
            </div>
            <div className="mt-[25px] grid grid-cols-2 gap-x-10 gap-y-5">
                {personalInformation.map((item) => (
                    <PersonalInformationItem key={v4()} icon={item.icon}>
                        <PersonalInformationItem.Title>
                            {item.title}
                        </PersonalInformationItem.Title>
                        <PersonalInformationItem.Description>
                            {(item.attribute === 'gender' &&
                                (user?.[item.attribute] ? 'Male' : 'Female')) ||
                                user?.[item.attribute]}
                        </PersonalInformationItem.Description>
                    </PersonalInformationItem>
                ))}
            </div>
        </div>
    );
};

export default PersonalInformation;
