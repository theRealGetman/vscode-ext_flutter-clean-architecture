import * as changeCase from "change-case";

export function getCubitStateTemplate(
  cubitName: string,
  useEquatable: boolean,
): string {
  return useEquatable
    ? getEquatableCubitStateTemplate(cubitName)
    : getDefaultCubitStateTemplate(cubitName);
}

function getEquatableCubitStateTemplate(cubitName: string): string {
  const pascalCaseCubitName = changeCase.pascalCase(cubitName.toLowerCase());
  const snakeCaseCubitName = changeCase.snakeCase(cubitName.toLowerCase());
  return `part of '${snakeCaseCubitName}_cubit.dart';

sealed class ${pascalCaseCubitName}State extends Equatable {
  const ${pascalCaseCubitName}State();

  @override
  List<Object> get props => [];
}

final class ${pascalCaseCubitName}Initial extends ${pascalCaseCubitName}State {}
`;
}

function getDefaultCubitStateTemplate(cubitName: string): string {
  const pascalCaseCubitName = changeCase.pascalCase(cubitName.toLowerCase());
  const snakeCaseCubitName = changeCase.snakeCase(cubitName.toLowerCase());
  return `part of '${snakeCaseCubitName}_cubit.dart';

@immutable
sealed class ${pascalCaseCubitName}State {}

final class ${pascalCaseCubitName}Initial extends ${pascalCaseCubitName}State {}
`;
}
