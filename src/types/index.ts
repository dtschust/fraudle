export enum SquareValue {
	UNKNOWN = -1,
	NO = 0,
	ALMOST = 1,
	YES = 2,
}

export type RowType = [SquareValue, SquareValue, SquareValue, SquareValue, SquareValue];

export type GridType = [RowType, RowType, RowType, RowType, RowType, RowType];
