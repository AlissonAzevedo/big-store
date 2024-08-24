import { ReactQueryProvider} from "@/utils/providers/reactQueryProvider";
import { ReactNode } from 'react';

export const LayoutProvider = ({ children }: { children: ReactNode }) => {
    return (
        <ReactQueryProvider>
            {children}
        </ReactQueryProvider>
    );
}
