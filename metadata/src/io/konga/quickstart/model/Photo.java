package io.konga.quickstart.model;

import io.konga.metadata.annotations.ApiPath;
import io.konga.metadata.annotations.Configuration;
import io.konga.metadata.annotations.Deleteable;
import io.konga.metadata.annotations.Editable;
import io.konga.metadata.annotations.Entity;
import io.konga.metadata.annotations.EntityId;
import io.konga.metadata.annotations.EntityKey;
import io.konga.metadata.annotations.EntityLabel;
import io.konga.metadata.annotations.Field;
import io.konga.metadata.annotations.FieldType;
import io.konga.metadata.annotations.FormType;
import io.konga.metadata.annotations.Label;
import io.konga.metadata.annotations.Raw;
import io.konga.metadata.annotations.Required;
import io.konga.metadata.annotations.Searchable;
import io.konga.metadata.annotations.ShowInResults;
import io.konga.metadata.annotations.ShowInUpdate;
import io.konga.metadata.annotations.Type;
import io.konga.metadata.definition.enumerations.DataTypes;
import io.konga.metadata.definition.enumerations.FieldTypes;
import io.konga.metadata.definition.enumerations.FormTypes;

@Entity("photo")
@Label("Photo")
@Searchable
@Editable
@Deleteable
@FormType(results=FormTypes.CUSTOM)
@ApiPath("photos")
@Configuration(
	@Raw(key="RESULTS_CUSTOM_VIEW", value="GRID_RESULTS_VIEW")
)
public class Photo {

	@Field
	@Label("id")
	@EntityId
	@EntityKey
	@ShowInResults
	@ShowInUpdate
	@Type(DataTypes.NUMBER)
	@FieldType(FieldTypes.NUMBER)
	private Integer id;
	
	@Field
	@Label("Album ID")
	@Searchable
	@ShowInResults
	@Type(DataTypes.NUMBER)
	@FieldType(FieldTypes.NUMBER)
	private Integer albumId;
	
	@Field
	@Label("Title")
	@EntityLabel
	@ShowInResults
	@ShowInUpdate
	@Editable
	@Required
	private String title;
	
	@Field
	@Label("URL")
	@ShowInUpdate
	@FieldType(FieldTypes.IMAGE)
	private String url;
	
	@Field
	@Label("")
	@FieldType(FieldTypes.IMAGE)
	private String thumbnailUrl;
}
