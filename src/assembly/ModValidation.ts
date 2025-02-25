import { System } from "@koinos/sdk-as";
import { modvalidation } from "./proto/modvalidation";
import { MODULE_VALIDATION_TYPE_ID } from "./Constants";

export class ModValidation {

  callArgs: System.getArgumentsReturn | null;

  contractId: Uint8Array = System.getContractId();

  /**
   * Validates an operation to ensure it meets specific criteria.
   * This method should be overridden by derived classes to implement custom validation logic.
   * It returns true by default because all active validation modules must return a positive result for the operation to be valid;
   * 
   * @external
   */
  is_authorized(args: modvalidation.authorize_arguments): modvalidation.authorize_result {
    System.log("[mod-validation] is_authorized called");
    return new modvalidation.authorize_result(true);
  }

  /**
   * Handles the installation of the module.
   * 
   * This method is called when the module is installed. It can include logic
   * for setting up the module, initializing storage, or other setup tasks.
   * @external
   */
  on_install(args: modvalidation.on_install_args): void {
    System.log("[mod-validation] called module install");
  }

  /**
   * Handles the uninstallation of the module.
   * 
   * This method is called when the module is uninstalled. It can include logic
   * for cleanup tasks, such as removing storage or other resources used by the module.
   * @external
   */
  on_uninstall(args: modvalidation.on_uninstall_args): void {
    System.log("[mod-validation] called module uninstall");
  }

  /**
   * Checks if the module matches a specific type.
   * 
   * This method is called to verify if the module is of a certain type. It returns
   * a boolean indicating whether the module type matches the provided type ID.
   * @external
   * @readonly
   */
  is_type(args: modvalidation.is_type_args): modvalidation.is_type_result {
    const result = new modvalidation.is_type_result();
    result.value = args.type_id == this.manifest().type_id;
    return result;
  }

  /**
   * @external
   * @readonly
   */
  manifest(): modvalidation.manifest {
    const result = new modvalidation.manifest();
    result.name = "Module validation";
    result.description = "Module validation main class";
    result.type_id = MODULE_VALIDATION_TYPE_ID;
    result.version = "2.0.0";
    return result;
  }
}