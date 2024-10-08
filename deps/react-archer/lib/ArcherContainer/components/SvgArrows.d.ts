import { Property } from 'csstype';
import { ArcherContainerProps, SourceToTargetsArrayType } from '../ArcherContainer.types';
interface CommonProps {
    startMarker: ArcherContainerProps['startMarker'];
    endMarker: ArcherContainerProps['endMarker'];
    endShape: NonNullable<ArcherContainerProps['endShape']>;
    strokeColor: NonNullable<ArcherContainerProps['strokeColor']>;
    strokeWidth: NonNullable<ArcherContainerProps['strokeWidth']>;
    strokeDasharray: ArcherContainerProps['strokeDasharray'];
    noCurves: ArcherContainerProps['noCurves'];
    lineStyle: ArcherContainerProps['lineStyle'];
    offset: ArcherContainerProps['offset'];
    uniqueId: string;
    refs: Record<string, HTMLElement>;
    hitSlop?: number;
    cursor?: Property.Cursor;
}
export declare const SvgArrows: (props: {
    parentCurrent: HTMLDivElement | null | undefined;
    sourceToTargetsMap: Record<string, SourceToTargetsArrayType>;
} & CommonProps) => JSX.Element | null;
export {};
