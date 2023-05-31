import { useNotificationStore } from '@/stores/notifications';
import { useToast } from '@chakra-ui/react';
import { useCallback, useEffect } from 'react';

export function NotificationHook() {
    const { notifications, dismissNotification } = useNotificationStore();
    const toast = useToast();
    const notifcationsCb = useCallback(() => {
        notifications.forEach((notification:any) => {
            if (!toast.isActive(notification.id)) {
                toast({
                    title: notification.title,
                    description: notification.message,
                    status: notification.type,
                    duration: 3000,
                    isClosable: true,
                    position: 'bottom-right',
                    onCloseComplete: () => dismissNotification(notification.id),
                });
            }
        });
    }, [dismissNotification, notifications, toast]);
    useEffect(() => {
        notifcationsCb();
        return () => {
            notifications.map((notification) => dismissNotification(notification.id));
        };
    }, [dismissNotification, notifcationsCb, notifications]);
    return null;
}
