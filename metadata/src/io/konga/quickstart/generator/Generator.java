package io.konga.quickstart.generator;

import io.konga.metadata.definition.KongaDefinition;
import io.konga.metadata.definition.KongaMetadata;
import io.konga.metadata.generator.KongaGenerator;

public class Generator {

	public static void main(String[] args) {
		
		// Define the app
		KongaDefinition quickStartApp = new KongaDefinition("Konga Quick Start", "io.konga.quickstart.model");
		
		// Generate metadata
		KongaMetadata metadata = KongaGenerator.readPackage(quickStartApp);
		
		// Print
		System.out.println(metadata.toJson());
		
		/*
		 * Copy the results and replace in the UI. 
		 * On the constant /app/scripts/services/metadata.js
		 * See how at http://konga.io/
		 */

	}

}
